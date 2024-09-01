import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-golden-light text-golden-dark" dir="rtl">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-[600px] flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-golden-dark opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 variants={slideIn} className="text-5xl font-bold mb-4">سافر إلى الصين</motion.h1>
          <motion.p variants={slideIn} className="text-xl mb-8">اكتشف روعة وسحر الصين مع الوكالة الملكية</motion.p>
          <motion.div variants={slideIn}>
            <Button size="lg" className="bg-golden hover:bg-golden-dark text-white">ابدأ رحلتك</Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Travel Categories */}
      <section className="py-16 px-4">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-8 text-golden-dark"
        >
          وجهات سياحية في الصين
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {['بكين', 'شنغهاي', 'شيان', 'قوانغتشو'].map((category, index) => (
            <motion.div key={category} variants={slideIn} custom={index}>
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-golden-dark">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-golden-light rounded-md flex items-center justify-center">
                    <span className="text-4xl">🏙️</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 px-4 bg-golden">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-8 text-white"
        >
          الجولات المميزة
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
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
                  <motion.div variants={slideIn} custom={index}>
                    <Card className="bg-white">
                      <CardHeader>
                        <CardTitle className="text-golden-dark">{tour}</CardTitle>
                        <CardDescription className="text-golden">اكتشف روعة {tour.split(' ')[0]}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-32 bg-golden-light rounded-md"></div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full text-golden-dark border-golden-dark hover:bg-golden-light">اعرف المزيد</Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-8 text-golden-dark"
        >
          آراء المسافرين
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { name: 'سالم الحارثي', quote: 'رحلة لا تُنسى إلى الصين مع الوكالة الملكية!' },
            { name: 'فاطمة البلوشي', quote: 'خدمة ممتازة وتنظيم رائع للرحلة.' },
            { name: 'أحمد الراشدي', quote: "تجربة ثقافية غنية وممتعة في الصين." },
          ].map((testimonial, index) => (
            <motion.div key={index} variants={slideIn} custom={index}>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-golden-dark">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-golden">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-golden-dark text-white py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">عن الوكالة الملكية</h3>
            <p>نحن ملتزمون بتقديم تجارب سفر استثنائية للعمانيين في الصين.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul>
              <li><a href="#" className="hover:text-golden">الرحلات</a></li>
              <li><a href="#" className="hover:text-golden">الوجهات</a></li>
              <li><a href="#" className="hover:text-golden">نصائح السفر</a></li>
              <li><a href="#" className="hover:text-golden">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-golden">فيسبوك</a>
              <a href="#" className="hover:text-golden">إنستغرام</a>
              <a href="#" className="hover:text-golden">تويتر</a>
              <a href="#" className="hover:text-golden">يوتيوب</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;