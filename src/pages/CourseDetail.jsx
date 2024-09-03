import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating API call to fetch course details
    const fetchCourseDetail = async () => {
      // In a real application, you would fetch the course details from an API
      // For now, we'll use mock data
      const mockCourseDetail = {
        id: id,
        title: `Course ${id}`,
        instructor: "John Doe",
        description: "This is a sample course description.",
        syllabus: ["Module 1", "Module 2", "Module 3"],
        instructorBio: "John Doe is an experienced instructor.",
      };
      setCourseDetail(mockCourseDetail);
    };

    fetchCourseDetail();
  }, [id]);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
    localStorage.setItem('courseProgress', JSON.stringify(newProgress));
  };

  if (!courseDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8" dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle>{courseDetail.title}</CardTitle>
          <CardDescription>{courseDetail.instructor}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video mb-4">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              Vimeo Video Embed
            </div>
          </div>
          <p className="mb-4">{courseDetail.description}</p>
          <h3 className="text-xl font-bold mb-2">المنهج الدراسي</h3>
          <ul className="list-disc list-inside mb-4">
            {courseDetail.syllabus && courseDetail.syllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mb-2">عن المدرب</h3>
          <p>{courseDetail.instructorBio}</p>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">تقدمك</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{width: `${progress}%`}}
              ></div>
            </div>
            <Button 
              className="mt-2"
              onClick={() => updateProgress(Math.min(progress + 10, 100))}
            >
              تحديث التقدم
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetail;