import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TourDetail = () => {
  const tour = {
    title: 'رحلة سور الصين العظيم',
    description: "استكشف أحد عجائب الدنيا السبع في هذه الرحلة الرائعة إلى سور الصين العظيم. استمتع بمناظر خلابة وتاريخ غني في هذه الرحلة التي تستغرق يومًا كاملًا من بكين.",
    guide: {
      name: 'لي وي',
      bio: 'مرشد سياحي ذو خبرة 15 عامًا في تنظيم الرحلات إلى سور الصين العظيم.',
      avatar: '/placeholder.svg',
    },
    itinerary: [
      { title: 'الانطلاق من بكين', content: 'التجمع في الفندق والانطلاق بالحافلة إلى سور الصين العظيم' },
      { title: 'وصول موتيانيو', content: 'الوصول إلى قسم موتيانيو من السور وبدء الجولة' },
      { title: 'استكشاف السور', content: 'المشي على السور واستكشاف الأبراج التاريخية' },
      { title: 'الغداء', content: 'استراحة للغداء في مطعم محلي' },
      { title: 'العودة إلى بكين', content: 'العودة إلى بكين مع توقف قصير لشراء التذكارات' },
    ],
  };

  return (
    <div className="container mx-auto py-8" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Tour Intro */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
            <div className="aspect-video bg-muted rounded-lg mb-4"></div>
            <p className="text-lg">{tour.description}</p>
          </div>

          {/* Itinerary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">برنامج الرحلة</h2>
            <Accordion type="single" collapsible className="w-full">
              {tour.itinerary.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div>
          {/* Booking Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>احجز هذه الرحلة</CardTitle>
              <CardDescription>استمتع برحلة لا تُنسى إلى سور الصين العظيم</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">75 ريال عماني</p>
              <Button className="w-full">احجز الآن</Button>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">السعر للشخص الواحد</p>
            </CardFooter>
          </Card>

          {/* Tour Guide Bio */}
          <Card>
            <CardHeader>
              <CardTitle>المرشد السياحي</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 ml-4">
                  <AvatarImage src={tour.guide.avatar} alt={tour.guide.name} />
                  <AvatarFallback>{tour.guide.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{tour.guide.name}</h3>
                  <p className="text-sm text-muted-foreground">مرشد سياحي محترف</p>
                </div>
              </div>
              <p>{tour.guide.bio}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews and Ratings (placeholder) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">آراء المسافرين</h2>
        <p>سيتم إضافة مكون التقييمات والآراء هنا.</p>
      </div>
    </div>
  );
};

export default TourDetail;