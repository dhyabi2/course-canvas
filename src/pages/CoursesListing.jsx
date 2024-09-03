import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CoursesListing = () => {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Load courses and filters from local storage
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    const storedFilters = JSON.parse(localStorage.getItem('searchFilters')) || {};
    
    setCourses(storedCourses);
    setFilters(storedFilters);
  }, []);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    localStorage.setItem('searchFilters', JSON.stringify(newFilters));
  };

  const handleSearch = (searchTerm) => {
    // Implement search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="container mx-auto py-8" dir="rtl">
      <h1 className="text-4xl font-bold mb-8 text-center">الدورات المتاحة</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Select onValueChange={(value) => handleFilterChange('category', value)}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="الفئة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع الفئات</SelectItem>
            <SelectItem value="business">الأعمال</SelectItem>
            <SelectItem value="technology">التكنولوجيا</SelectItem>
            <SelectItem value="language">اللغات</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilterChange('level', value)}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="المستوى" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع المستويات</SelectItem>
            <SelectItem value="beginner">مبتدئ</SelectItem>
            <SelectItem value="intermediate">متوسط</SelectItem>
            <SelectItem value="advanced">متقدم</SelectItem>
          </SelectContent>
        </Select>
        <Input 
          type="search" 
          placeholder="ابحث عن الدورات..." 
          className="flex-grow"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-md" />
            </CardContent>
            <CardFooter>
              <Button className="w-full">سجل الآن</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesListing;