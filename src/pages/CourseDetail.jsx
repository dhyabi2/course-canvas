import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CourseDetail = () => {
  const course = {
    title: 'Mastering Tmall Global Operations',
    description: "Learn how to successfully launch and manage your brand on Tmall Global, China's premier cross-border e-commerce platform. This comprehensive course covers everything from account setup to advanced marketing strategies.",
    instructor: {
      name: 'Zhang Wei',
      bio: 'Former Alibaba executive with 10+ years of experience in cross-border e-commerce.',
      avatar: '/placeholder.svg',
    },
    syllabus: [
      { title: 'Introduction to Tmall Global', content: 'Platform overview, account types, and registration process' },
      { title: 'Store Setup and Optimization', content: 'Design principles, product listing best practices, and SEO strategies' },
      { title: 'Cross-Border Logistics and Customs', content: 'Understanding bonded warehouses, direct shipping, and customs regulations' },
      { title: 'Marketing on Tmall Global', content: 'Tmall marketing tools, influencer collaborations, and promotional events' },
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
              <CardDescription>Gain expertise in Tmall Global operations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">¥1999</p>
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
                  <p className="text-sm text-muted-foreground">Tmall Global Expert</p>
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