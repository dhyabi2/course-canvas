import { HomeIcon, BookOpenIcon, UserIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import CoursesListing from "./pages/CoursesListing.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Auth from "./pages/Auth.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Courses",
    to: "/courses",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <CoursesListing />,
  },
  {
    title: "Course Detail",
    to: "/course/:id",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <CourseDetail />,
  },
  {
    title: "Login/Signup",
    to: "/auth",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Auth />,
  },
];