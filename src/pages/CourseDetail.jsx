import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CourseDetail = () => {
  const course = {
    title: 'إتقان عمليات تي مول العالمية',
    description: "تعلم كيفية إطلاق وإدارة علامتك التجارية بنجاح على تي مول العالمية، منصة التجارة الإلكترونية الرائدة عبر الحدود في الصين. تغطي هذه الدورة الشاملة كل شيء من إعداد الحساب إلى استراتيجيات التسويق المتقدمة.",
    instructor: {
      name: 'محمد الزدجالي',
      bio: 'مدير تنفيذي سابق في علي بابا مع أكثر من 10 سنوات من الخبرة في التجارة الإلكترونية عبر الحدود.',
      avatar: '/placeholder.svg',
    },
    syllabus: [
      { title: 'مقدمة في تي مول العالمية', content: 'نظرة عامة على المنصة، أنواع الحسابات، وعملية التسجيل' },
      { title: 'إعداد وتحسين المتجر', content: 'مبادئ التصميم، أفضل الممارسات لقوائم المنتجات، واستراتيجيات تحسين محركات البحث' },
      { title: 'الخدمات اللوجستية والجمارك عبر الحدود', content: 'فهم المستودعات الجمركية، الشحن المباشر، واللوائح الجمركية' },
      { title: 'التسويق على تي مول العالمية', content: 'أدوات التسويق في تي مول، التعاون مع المؤثرين، والفعاليات الترويجية' },
    ],
  };

  return (
    <div className="container mx-auto py-8" dir="rtl">
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
            <h2 className="text-2xl font-bold mb-4">محتوى الدورة</h2>
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
              <CardTitle>سجل في هذه الدورة</CardTitle>
              <CardDescription>اكتسب خبرة في عمليات تي مول العالمية</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">199 ريال عماني</p>
              <Button className="w-full">سجل الآن</Button>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">ضمان استرداد الأموال لمدة 30 يومًا</p>
            </CardFooter>
          </Card>

          {/* Instructor Bio */}
          <Card>
            <CardHeader>
              <CardTitle>المدرب</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 ml-4">
                  <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{course.instructor.name}</h3>
                  <p className="text-sm text-muted-foreground">خبير في تي مول العالمية</p>
                </div>
              </div>
              <p>{course.instructor.bio}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews and Ratings (placeholder) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">آراء الطلاب</h2>
        <p>سيتم إضافة مكون التقييمات والآراء هنا.</p>
      </div>
    </div>
  );
};

export default CourseDetail;