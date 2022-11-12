import { Outlet } from "@tanstack/react-router";

import { Header } from "layouts/Header";
import { Footer } from "components/Footer";

export const App: React.FC = () => {
  return (
    <section>
      <Header />

      <main className="p-3 pt-8 container m-auto">
        <Outlet />
      </main>

      <Footer />
    </section>
  );
};
