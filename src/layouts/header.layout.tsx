import { router } from "views/router";

const links = [
  { children: "Home", to: "/home" },
  { children: "Artworks / Museum", to: "/artworks" },
] as const;

export const Header: React.FC = () => (
  <header className="flex flex-wrap relative h-8 p-3 container m-auto">
    <router.Link to="/home">
      <h1 className="h1 text-2xl font-bold absolute left-3">
        It belongs in a museum
      </h1>
    </router.Link>

    <nav className="header m-auto flex gap-2">
      {links.map((linkProps, index) => (
        <router.Link {...linkProps} key={index} />
      ))}
    </nav>
  </header>
);
