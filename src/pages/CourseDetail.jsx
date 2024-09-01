import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CourseDetail = () => {
  const course = {
    title: 'Advanced React and Redux',
    description: 'Master the art of building complex, scalable web applications with React and Redux. This comprehensive course covers advanced concepts, best practices, and real-world applications.',
    instructor: {
      name: 'Jane Doe',
      bio: 'Senior Frontend Developer with 10+ years of experience in building large-scale web applications.',
      avatar: '/placeholder.svg',
    },
    syllabus: [
      { title: 'Introduction to Advanced React Concepts', content: 'Hooks, Context API, and Performance Optimization' },
      { title: 'Redux Deep Dive', content: 'Advanced state management, middleware, and async actions' },
      { title: 'Testing React Applications', content: 'Unit testing, integration testing, and end-to-end testing' },
      { title: 'Server-Side Rendering with Next.js', content: 'Building SEO-friendly React applications' },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Course Intro */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <div className="aspect-video bg-muted rounded-lg mb-4"></div>
            <p className="text-lg">{course.description}</p>
          </div>

          {/* Syllabus */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Course Content</h2>
            <Accordion type="single" collapsible className="w-full">
              {course.syllabus.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div>
          {/* Enrollment Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enroll in this course</CardTitle>
              <CardDescription>Gain access to all course materials</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$99.99</p>
              <Button className="w-full">Enroll Now</Button>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
            </CardFooter>
          </Card>

          {/* Instructor Bio */}
          <Card>
            <CardHeader>
              <CardTitle>Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{course.instructor.name}</h3>
                  <p className="text-sm text-muted-foreground">Course Instructor</p>
                </div>
              </div>
              <p>{course.instructor.bio}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews and Ratings (placeholder) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
        <p>Reviews and ratings component to be implemented here.</p>
      </div>
    </div>
  );
};

export default CourseDetail;