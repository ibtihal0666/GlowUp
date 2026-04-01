import { Switch, Route, Router as WouterRouter } from "wouter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

// Pages
import Dashboard from "@/pages/Dashboard";
import Products from "@/pages/Products";
import CreateProduct from "@/pages/CreateProduct";
import PlanRoutine from "@/pages/PlanRoutine";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/products" component={Products} />
      <Route path="/create" component={CreateProduct} />
      <Route path="/plan" component={PlanRoutine} />
      <Route>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
          <h1 className="text-4xl mb-4">404</h1>
          <p className="font-sans text-2xl">Quest Not Found</p>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen pb-12 flex flex-col font-sans">
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Router />
          </main>
        </WouterRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
