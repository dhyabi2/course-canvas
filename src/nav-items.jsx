import { HomeIcon, MapIcon, UserIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ToursListing from "./pages/CoursesListing.jsx";
import TourDetail from "./pages/CourseDetail.jsx";
import Auth from "./pages/Auth.jsx";

export const navItems = [
  {
    title: "الرئيسية",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "الرحلات",
    to: "/tours",
    icon: <MapIcon className="h-4 w-4" />,
    page: <ToursListing />,
  },
  {
    title: "تفاصيل الرحلة",
    to: "/tour/:id",
    icon: <MapIcon className="h-4 w-4" />,
    page: <TourDetail />,
  },
  {
    title: "تسجيل الدخول",
    to: "/auth",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Auth />,
  },
];