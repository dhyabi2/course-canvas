import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CoursesListing = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', category: 'Web Development', image: '/placeholder.svg' },
    { id: 2, title: 'Python for Data Science', category: 'Data Science', image: '/placeholder.svg' },
    { id: 3, title: 'UI/UX Design Principles', category: 'Design', image: '/placeholder.svg' },
    { id: 4, title: 'Digital Marketing Fundamentals', category: 'Business', image: '/placeholder.svg' },
    { id: 5, title: 'Machine Learning Basics', category: 'Data Science', image: '/placeholder.svg' },
    { id: 6, title: 'JavaScript Advanced Concepts', category: 'Web Development', image: '/placeholder.svg' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Browse Courses</h1>

      {/* Filtering and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="web-dev">Web Development</SelectItem>
            <SelectItem value="data-science">Data Science</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
        <Input type="search" placeholder="Search courses..." className="flex-grow" />
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
              <Button className="w-full">View Course</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
};

export default CoursesListing;