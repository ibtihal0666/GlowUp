import { Switch, Route, Router as WouterRouter } from "wouter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { PixelBackground } from "@/components/PixelBackground";

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
          <h1 className="text-3xl mb-4">404</h1>
          <p className="font-sans text-xl">Quest Not Found</p>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative">
        <PixelBackground />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <main className="flex-1 pb-12 pt-8 pr-[200px] relative z-10">
            <Router />
          </main>
          <footer className="pr-[200px] relative z-10 border-t-4 border-primary bg-card/80 backdrop-blur-sm py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 flex-wrap">
            <span className="font-sans text-xs text-muted-foreground text-center">
              © IBTIHAL NOUI — All rights reserved
            </span>
            <span className="hidden sm:block text-primary font-bold">·</span>
            <a
              href="mailto:ibtihalnoui06@gmail.com"
              className="font-sans text-xs text-primary hover:underline"
            >
              ibtihalnoui06@gmail.com
            </a>
            <span className="hidden sm:block text-primary font-bold">·</span>
            <a
              href="https://github.com/ibtihal0666"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-primary hover:underline"
            >
              github.com/ibtihal0666
            </a>
          </footer>
          <Navbar />
        </WouterRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
