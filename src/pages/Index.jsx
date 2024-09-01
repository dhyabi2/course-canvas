import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">أتقن التجارة الإلكترونية الصينية</h1>
          <p className="text-xl mb-8">افتح إمكانات أكبر سوق للتجارة الإلكترونية في العالم</p>
          <Button size="lg">ابدأ التعلم</Button>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">تخصصات التجارة الإلكترونية</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {['عمليات تي مول', 'استراتيجية جيه دي دوت كوم', 'تطبيقات وي تشات المصغرة', 'التجارة الإلكترونية عبر الحدود'].map((category) => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                  <span className="text-4xl">🛒</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-secondary">
        <h2 className="text-3xl font-bold text-center mb-8">الدورات المميزة</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[
              'إتقان نظام علي بابا',
              'استراتيجيات النمو في بيندودو',
              'استراتيجيات التجارة الإلكترونية في دويين',
              'تقنيات التسويق في كوايشو',
              'التسويق المؤثر في شياوهونغشو (الكتاب الأحمر الصغير)'
            ].map((course, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>{course}</CardTitle>
                    <CardDescription>أتقن استراتيجيات {course.split(' ')[0]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-muted rounded-md"></div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">اعرف المزيد</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">قصص النجاح</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'سالم الحارثي', quote: 'ساعدتني هذه المنصة في إطلاق متجري على تي مول بنجاح!' },
            { name: 'فاطمة البلوشي', quote: 'ضاعفت مبيعاتي على جيه دي دوت كوم بعد تطبيق هذه الاستراتيجيات.' },
            { name: 'أحمد الراشدي', quote: "كانت دورة تطبيقات وي تشات المصغرة نقطة تحول في أعمالي." },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">عن الشركة</h3>
            <p>نحن ملتزمون بتمكين رواد الأعمال العمانيين في مجال التجارة الإلكترونية الصينية.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul>
              <li><a href="#" className="hover:underline">الدورات</a></li>
              <li><a href="#" className="hover:underline">قصص النجاح</a></li>
              <li><a href="#" className="hover:underline">المدونة</a></li>
              <li><a href="#" className="hover:underline">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">وي تشات</a>
              <a href="#" className="hover:text-accent">ويبو</a>
              <a href="#" className="hover:text-accent">لينكد إن</a>
              <a href="#" className="hover:text-accent">جيهو</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;