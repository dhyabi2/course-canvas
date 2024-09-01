import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ToursListing = () => {
  const tours = [
    { id: 1, title: 'رحلة سور الصين العظيم', category: 'بكين', image: '/placeholder.svg' },
    { id: 2, title: 'جولة في المدينة المحرمة', category: 'بكين', image: '/placeholder.svg' },
    { id: 3, title: 'رحلة نهر لي في قويلين', category: 'قويلين', image: '/placeholder.svg' },
    { id: 4, title: 'استكشاف حي بوند في شنغهاي', category: 'شنغهاي', image: '/placeholder.svg' },
    { id: 5, title: 'زيارة جيش التيراكوتا في شيان', category: 'شيان', image: '/placeholder.svg' },
    { id: 6, title: 'رحلة إلى جبل هوانغشان', category: 'آنهوي', image: '/placeholder.svg' },
  ];

  return (
    <div className="container mx-auto py-8" dir="rtl">
      <h1 className="text-4xl font-bold mb-8 text-center">رحلات إلى الصين</h1>

      {/* Filtering and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="الوجهة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع الوجهات</SelectItem>
            <SelectItem value="beijing">بكين</SelectItem>
            <SelectItem value="shanghai">شنغهاي</SelectItem>
            <SelectItem value="xian">شيان</SelectItem>
            <SelectItem value="guilin">قويلين</SelectItem>
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
        <Input type="search" placeholder="ابحث عن الرحلات..." className="flex-grow" />
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <Card key={tour.id}>
            <CardHeader>
              <CardTitle>{tour.title}</CardTitle>
              <CardDescription>{tour.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover rounded-md" />
            </CardContent>
            <CardFooter>
              <Button className="w-full">احجز الآن</Button>
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

export default ToursListing;