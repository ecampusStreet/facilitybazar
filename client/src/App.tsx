import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CafeteriaPage from "@/pages/services/cafeteria";
import CoffeeVendingPage from "@/pages/services/vending/coffee";
import SnacksVendingPage from "@/pages/services/vending/snacks";
import HousekeepingPage from "@/pages/services/housekeeping";
import StationaryPage from "@/pages/services/stationary";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/cafeteria" component={CafeteriaPage} />
      <Route path="/services/vending/coffee" component={CoffeeVendingPage} />
      <Route path="/services/vending/snacks" component={SnacksVendingPage} />
      <Route path="/services/housekeeping" component={HousekeepingPage} />
      <Route path="/services/stationary" component={StationaryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;