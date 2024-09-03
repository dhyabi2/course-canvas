import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from '../components/Navigation';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Index = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [lastWatched, setLastWatched] = useState(null);

  useEffect(() => {
    // Retrieve data from local storage
    const storedFeaturedCourses = JSON.parse(localStorage.getItem('featuredCourses')) || [];
    const storedTestimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    const storedLastWatched = JSON.parse(localStorage.getItem('lastWatched'));

    setFeaturedCourses(storedFeaturedCourses);
    setTestimonials(storedTestimonials);
    setLastWatched(storedLastWatched);
  }, []);

  return (
    <div className="min-h-screen bg-golden-light text-golden-dark" dir="rtl">
      <Navigation />

      {/* Hero Section with Vimeo Video */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[600px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-golden-dark opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">سافر الى الصين / Travel to China</h1>
          <p className="text-3xl mb-4">وكالة الملكية / Royal agency ⚱️</p>
          <div className="aspect-video w-full max-w-3xl mx-auto mb-8">
            {/* Vimeo embed placeholder */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              Vimeo Video Embed
            </div>
          </div>
          <Button size="lg" className="bg-golden hover:bg-golden-dark text-white">سجل في رحلتنا القادمة</Button>
        </div>
      </motion.section>

      {/* Course Categories Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">فئات الدورات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['الأعمال', 'التكنولوجيا', 'اللغات'].map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>استكشف دورات {category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Featured Courses Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4 bg-golden"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">الدورات المميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
                <Button className="mt-4">اكتشف المزيد</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">آراء المتعلمين</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent>
                <p className="mb-4">"{testimonial.content}"</p>
                <p className="font-bold">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Last Watched Section */}
      {lastWatched && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-16 px-4 bg-golden-light"
        >
          <h2 className="text-3xl font-bold text-center mb-8">استأنف التعلم</h2>
          <Card>
            <CardHeader>
              <CardTitle>{lastWatched.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{lastWatched.description}</p>
              <Button className="mt-4">استأنف الدورة</Button>
            </CardContent>
          </Card>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="bg-golden-dark text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 وكالة الملكية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;