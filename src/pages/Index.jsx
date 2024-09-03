import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { navItems } from '../nav-items';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HomeNavigation = () => {
  return (
    <nav className="bg-golden-dark text-white p-4 sticky top-0 z-50">
      <ul className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link 
              to={item.to} 
              className="flex items-center space-x-2 hover:text-golden transition-colors duration-300"
            >
              {item.icon}
              <span className="text-lg font-semibold">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-golden-light text-golden-dark" dir="rtl">
      <HomeNavigation />
      
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[600px] flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-golden-dark opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">سافر الى الصين / Travel to China</h1>
          <p className="text-3xl mb-4">وكالة الملكية / Royal agency ⚱️</p>
          <p className="text-xl mb-8">مستقبلك في رحلة ✈️ رحلات تجارية الى الصين 🇨🇳</p>
          <p className="text-xl mb-4">-هوليداي ان</p>
          <Button size="lg" className="bg-golden hover:bg-golden-dark text-white">سجل في رحلتنا القادمة</Button>
          <p className="mt-4 text-lg">Nauf alfarsi</p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">ما يميز الوكالة الملكية</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="text-center">
            <p className="mb-4">وجود فريق ذو خبره أكثر من ١٥ سنة</p>
            <p className="mb-4">في مجال الإستيراد والتصدير الآمن</p>
            <p>نسعى لـ تقديم خبرتنا لكم عن طريق دورات عملية</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Agency Trips Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4 bg-golden"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">ماهي رحلات الوكالة</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent>
            <p className="mb-4">عبارة عن دورة عملية سياحية في الصين. تشمل:</p>
            <ul className="list-disc list-inside">
              <li>رحلات ترفيهية</li>
              <li>الإقامة في فندق ٥ نجوم</li>
              <li>الاستقبال والتوديع من المطار</li>
              <li>برنامج التدريب</li>
              <li>الجولات الميدانية في السوق والمصنع الصناعية</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Silver Package Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">مستقبلك في رحلة</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">الباقة الفضية</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 font-bold">عرض لأول ٥ أشخاص</p>
            <ul className="list-disc list-inside mb-4">
              <li>جولة في أسواق الجملة مع شرح كيفية التعامل مع التجار.</li>
              <li>طرق الطلب وكيفية الاستيراد والتصدير من الصين.</li>
              <li>الرحلة الخاصة بالملايس الجاهزة، الرحلة الخاصة بالاكسسوارات، الرحلة الخاصة بالأطفال.</li>
            </ul>
            <p className="font-bold">تسجيل قبل الرحلة بـ ١٠ أيام</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Working Hours Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4 bg-golden-light"
      >
        <h2 className="text-3xl font-bold text-center mb-8">أوقات العمل</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent>
            <p className="mb-2">من الأحد إلى الخميس</p>
            <p className="mb-2">الفترة الصباحية ٩:٠٠ صباحاً ١:٠٠ ظهراً</p>
            <p className="mb-2">الفترة المسائية ٣:٠٠ مساءً ٥:٠٠ مساءً</p>
            <p className="mb-2">يوم الجمعة إجازة</p>
            <p>يوم السبت التواصل فقط واتس اب</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Free Workshop Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">ضاعف أموالك في رحلة</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="text-center">
            <p className="mb-2 font-bold">ورشة مجانية بعنوان</p>
            <p className="mb-2">السبت ٩.٩.٢٠٢٣</p>
            <p className="mb-2">الساعة ٩:٣٠ صباحاً</p>
            <p className="mb-4">عبر تطبيق جوجل ميت</p>
            <Button className="mb-4">سجل الآن</Button>
            <p>للتسجيل: 7093 7747 968+</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4 bg-golden"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">من نحن</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent>
            <p className="mb-4">الوكالة الملكية هي وكالة سفر متخصصة في تقديم خدمات سفر عالية الجودة واحترافية وشخصية لأفراد الأعمال.</p>
            <p className="mb-4">هدفنا هو أن نكون الخيار الأفضل للمسافرين من رجال الأعمال.</p>
            <p className="mb-4">حيث نقدم تجربة سفر فريدة ومصممة خصيصاً تساعدهم على التركيز على أهدافهم مع توفير الراحة والرفاهية. نحن نقدم خدمات شاملة من خدمات السفر، بما في ذلك حجوزات الطيران، وحجوزات الفنادق، وترتيبات النقل البري، وتخطيط أحداث الشركات لجلب بضائعهم من أكثر الأماكن جودة وبأقل الأسعار.</p>
            <p className="mb-4">مما يضمن تجربة سلسة وخالية من الإجهاد تمكن عملائنا من التركيز على أهداف أعمالهم الأساسية.</p>
            <p>لدينا طمح بأن نصبح وكالة السفر الرائدة للمسافرين من رجال الأعمال، ونشتهر بمهمتنا وموتوفيتنا والتزامنا بتقديم خدمة وقيمة استثنائية.</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">تواصل معنا</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="text-center">
            <p className="mb-4">لإستفسارتكم.. وتواصلكم تواصلوا معنا عبر!</p>
            <p className="mb-2">+968 9190 0702</p>
            <p className="mb-2">@royalagency.om</p>
            <p className="mb-4">royalagency.n@gmail.com</p>
            <p className="mb-4">مستقبلك.. في رحلة</p>
            <Button>تواصل الآن</Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Location Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-4 bg-golden-light"
      >
        <h2 className="text-3xl font-bold text-center mb-8">موقعنا</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="text-center">
            <p className="mb-2">سلطنة عمان - محافظة مسقط</p>
            <p>الموالح – هوليدان ان</p>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default Index;