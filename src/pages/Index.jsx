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
          <h1 className="text-5xl font-bold mb-4">سافر إلى الصين</h1>
          <p className="text-xl mb-8">اكتشف روعة وسحر الصين مع الوكالة الملكية</p>
          <Button size="lg">ابدأ رحلتك</Button>
        </div>
      </section>

      {/* Travel Categories */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">وجهات سياحية في الصين</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {['بكين', 'شنغهاي', 'شيان', 'قوانغتشو'].map((category) => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                  <span className="text-4xl">🏙️</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 px-4 bg-secondary">
        <h2 className="text-3xl font-bold text-center mb-8">الجولات المميزة</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[
              'رحلة سور الصين العظيم',
              'جولة في المدينة المحرمة',
              'رحلة نهر لي في قويلين',
              'استكشاف حي بوند في شنغهاي',
              'زيارة جيش التيراكوتا في شيان'
            ].map((tour, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>{tour}</CardTitle>
                    <CardDescription>اكتشف روعة {tour.split(' ')[0]}</CardDescription>
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
        <h2 className="text-3xl font-bold text-center mb-8">آراء المسافرين</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'سالم الحارثي', quote: 'رحلة لا تُنسى إلى الصين مع الوكالة الملكية!' },
            { name: 'فاطمة البلوشي', quote: 'خدمة ممتازة وتنظيم رائع للرحلة.' },
            { name: 'أحمد الراشدي', quote: "تجربة ثقافية غنية وممتعة في الصين." },
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
            <h3 className="text-xl font-bold mb-4">عن الوكالة الملكية</h3>
            <p>نحن ملتزمون بتقديم تجارب سفر استثنائية للعمانيين في الصين.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul>
              <li><a href="#" className="hover:underline">الرحلات</a></li>
              <li><a href="#" className="hover:underline">الوجهات</a></li>
              <li><a href="#" className="hover:underline">نصائح السفر</a></li>
              <li><a href="#" className="hover:underline">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">فيسبوك</a>
              <a href="#" className="hover:text-accent">إنستغرام</a>
              <a href="#" className="hover:text-accent">تويتر</a>
              <a href="#" className="hover:text-accent">يوتيوب</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;