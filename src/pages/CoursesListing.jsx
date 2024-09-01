import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CoursesListing = () => {
  const courses = [
    { id: 1, title: 'تحسين متجر تي مول', category: 'تي مول', image: '/placeholder.svg' },
    { id: 2, title: 'استراتيجيات الإعلان على جيه دي دوت كوم', category: 'جيه دي دوت كوم', image: '/placeholder.svg' },
    { id: 3, title: 'تطوير تطبيقات وي تشات المصغرة', category: 'وي تشات', image: '/placeholder.svg' },
    { id: 4, title: 'التجارة الإلكترونية عبر الحدود على كاولا', category: 'عبر الحدود', image: '/placeholder.svg' },
    { id: 5, title: 'تكتيكات الشراء الجماعي على بيندودو', category: 'بيندودو', image: '/placeholder.svg' },
    { id: 6, title: 'دمج التجارة الإلكترونية في دويين', category: 'التجارة الاجتماعية', image: '/placeholder.svg' },
  ];

  return (
    <div className="container mx-auto py-8" dir="rtl">
      <h1 className="text-4xl font-bold mb-8 text-center">دورات التجارة الإلكترونية الصينية</h1>

      {/* Filtering and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="المنصة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع المنصات</SelectItem>
            <SelectItem value="tmall">تي مول</SelectItem>
            <SelectItem value="jd">جيه دي دوت كوم</SelectItem>
            <SelectItem value="wechat">وي تشات</SelectItem>
            <SelectItem value="cross-border">عبر الحدود</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="ترتيب حسب" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">الأكثر شعبية</SelectItem>
            <SelectItem value="newest">الأحدث</SelectItem>
            <SelectItem value="price-low">السعر: من الأقل إلى الأعلى</SelectItem>
            <SelectItem value="price-high">السعر: من الأعلى إلى الأقل</SelectItem>
          </SelectContent>
        </Select>
        <Input type="search" placeholder="ابحث عن الدورات..." className="flex-grow" />
      </div>

      {/* Course Grid */}
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

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <Button variant="outline">التالي</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">1</Button>
        <Button variant="outline">السابق</Button>
      </div>
    </div>
  );
};

export default CoursesListing;