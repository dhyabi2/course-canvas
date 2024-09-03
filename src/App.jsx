import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import CourseDetail from "./pages/CourseDetail";
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  {navItems.map(({ to, page }) => (
                    <Route key={to} path={to} element={page} />
                  ))}
                  <Route path="/course/:id" element={<CourseDetail />} />
                </Routes>
              </main>
              <BottomNavigation />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;