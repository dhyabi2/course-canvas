import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Index = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-golden-light text-golden-dark pb-16 md:pb-0" dir="rtl">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-golden-dark opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">سافر الى الصين / Travel to China</h1>
          <p className="text-xl md:text-3xl mb-4">وكالة الملكية / Royal agency ⚱️</p>
          <p className="text-lg md:text-xl mb-8">مستقبلك في رحلة ✈️ رحلات تجارية الى الصين 🇨🇳</p>
          <Button size="lg" className="bg-golden hover:bg-golden-dark text-white" onClick={handleRegisterClick}>سجل في رحلتنا القادمة</Button>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-8 md:py-16 px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">ما يميز الوكالة الملكية</h2>
        <Card className="max-w-sm md:max-w-2xl mx-auto">
          <CardContent className="text-center py-6">
            <p className="mb-2 md:mb-4">وجود فريق ذو خبره أكثر من ١٥ سنة</p>
            <p className="mb-2 md:mb-4">في مجال الإستيراد والتصدير الآمن</p>
            <p>نسعى لـ تقديم خبرتنا لكم عن طريق دورات عملية</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* More sections can be added here, following the same pattern of responsiveness */}

      {/* Contact Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-8 md:py-16 px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">تواصل معنا</h2>
        <Card className="max-w-sm md:max-w-2xl mx-auto">
          <CardContent className="text-center py-6">
            <p className="mb-4">لإستفسارتكم.. وتواصلكم تواصلوا معنا عبر!</p>
            <p className="mb-2">+968 9190 0702</p>
            <p className="mb-2">@royalagency.om</p>
            <p className="mb-4">royalagency.n@gmail.com</p>
            <Button onClick={handleRegisterClick}>تواصل الآن</Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default Index;