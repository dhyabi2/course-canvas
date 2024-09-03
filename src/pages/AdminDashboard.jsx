import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState({});
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', category: '' });

  useEffect(() => {
    // Load admin data and courses from local storage
    const storedAdminData = JSON.parse(localStorage.getItem('adminData')) || {};
    const storedCourses = JSON.parse(localStorage.getItem('adminCourses')) || [];
    
    setAdminData(storedAdminData);
    setCourses(storedCourses);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    const updatedCourses = [...courses, { ...newCourse, id: Date.now() }];
    setCourses(updatedCourses);
    localStorage.setItem('adminCourses', JSON.stringify(updatedCourses));
    setNewCourse({ title: '', description: '', category: '' });
  };

  return (
    <div className="container mx-auto py-8" dir="rtl">
      <h1 className="text-4xl font-bold mb-8 text-center">لوحة التحكم الإدارية</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>إحصائيات عامة</CardTitle>
        </CardHeader>
        <CardContent>
          <p>عدد الدورات: {courses.length}</p>
          <p>عدد المستخدمين: {adminData.userCount || 0}</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>إضافة دورة جديدة</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input
              name="title"
              placeholder="عنوان الدورة"
              value={newCourse.title}
              onChange={handleInputChange}
            />
            <Textarea
              name="description"
              placeholder="وصف الدورة"
              value={newCourse.description}
              onChange={handleInputChange}
            />
            <Input
              name="category"
              placeholder="فئة الدورة"
              value={newCourse.category}
              onChange={handleInputChange}
            />
            <Button onClick={handleAddCourse}>إضافة الدورة</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الدورات</CardTitle>
        </CardHeader>
        <CardContent>
          {courses.map((course) => (
            <div key={course.id} className="mb-4 p-4 border rounded">
              <h3 className="font-bold">{course.title}</h3>
              <p>{course.description}</p>
              <p>الفئة: {course.category}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;