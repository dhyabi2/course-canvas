import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  return (
    <div className="container mx-auto py-8 flex items-center justify-center min-h-screen" dir="rtl">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>مرحبًا بك في الوكالة الملكية</CardTitle>
          <CardDescription>سجل أو قم بتسجيل الدخول لحجز رحلتك إلى الصين</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
              <TabsTrigger value="signup">إنشاء حساب</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                  </div>
                  <div>
                    <Label htmlFor="password">كلمة المرور</Label>
                    <Input id="password" type="password" placeholder="أدخل كلمة المرور" />
                  </div>
                  <Button type="submit" className="w-full">تسجيل الدخول</Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input id="name" placeholder="أدخل اسمك الكامل" />
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                  </div>
                  <div>
                    <Label htmlFor="password">كلمة المرور</Label>
                    <Input id="password" type="password" placeholder="أنشئ كلمة مرور" />
                  </div>
                  <Button type="submit" className="w-full">إنشاء حساب</Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-muted-foreground">أو تابع باستخدام</p>
            <div className="flex space-x-2">
              <Button variant="outline">جوجل</Button>
              <Button variant="outline">فيسبوك</Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;