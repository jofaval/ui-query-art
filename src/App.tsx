import { Outlet } from "@tanstack/react-router";

import { Header } from "@/layouts/Header";

import "./App.css";

export const App: React.FC = () => {
  return (
    <section className="App">
      <Header />

      <main>
        <Outlet />
      </main>
    </section>
  );
};
