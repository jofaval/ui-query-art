import { Outlet } from "@tanstack/react-router";

import { Footer } from "components/footer.component";
import { Header } from "./header.layout";

export const MainLayout: React.FC = () => (
  <section className="max-h-screen">
    <Header />

    <main className="p-3 pt-8">
      <Outlet />
    </main>

    <Footer />
  </section>
);
