
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminInventory from "./pages/admin/AdminInventory";
import AdminSales from "./pages/admin/AdminSales";
import AdminOffers from "./pages/admin/AdminOffers";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminNewsletter from "./pages/admin/AdminNewsletter";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminViolations from "./pages/admin/AdminViolations";
import AdminSuspendedStores from "./pages/admin/AdminSuspendedStores";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/inventory" element={<AdminInventory />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/sales" element={<AdminSales />} />
          <Route path="/admin/offers" element={<AdminOffers />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
          <Route path="/admin/newsletter" element={<AdminNewsletter />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/violations" element={<AdminViolations />} />
          <Route path="/admin/suspended-stores" element={<AdminSuspendedStores />} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
