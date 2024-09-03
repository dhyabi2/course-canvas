import { MapIcon, UserIcon, BookOpenIcon, ShieldCheckIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import CoursesListing from "./pages/CoursesListing.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Auth from "./pages/Auth.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

export const navItems = [
  {
    title: "الدورات",
    to: "/courses",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <CoursesListing />,
  },
  {
    title: "تفاصيل الدورة",
    to: "/course/:id",
    icon: <MapIcon className="h-4 w-4" />,
    page: <CourseDetail />,
  },
  {
    title: "تسجيل الدخول",
    to: "/auth",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Auth />,
  },
  {
    title: "لوحة التحكم",
    to: "/admin",
    icon: <ShieldCheckIcon className="h-4 w-4" />,
    page: <AdminDashboard />,
  },
];