import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our E-Learning Platform</h1>
          <p className="text-xl mb-8">Discover a world of knowledge at your fingertips</p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Course Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {['Web Development', 'Data Science', 'Design', 'Business'].map((category) => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-muted rounded-md flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-secondary">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((item) => (
              <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Course {item}</CardTitle>
                    <CardDescription>Description for Course {item}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-muted rounded-md"></div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
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
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'John Doe', quote: 'This platform has transformed my learning experience!' },
            { name: 'Jane Smith', quote: 'The courses are top-notch and the instructors are amazing.' },
            { name: 'Bob Johnson', quote: 'I've gained valuable skills that boosted my career.' },
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
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>We are dedicated to providing high-quality online education to learners worldwide.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">Instructors</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">Facebook</a>
              <a href="#" className="hover:text-accent">Twitter</a>
              <a href="#" className="hover:text-accent">LinkedIn</a>
              <a href="#" className="hover:text-accent">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;