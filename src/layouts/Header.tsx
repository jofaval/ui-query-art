import { router } from "views/router";

export const Header: React.FC = () => (
  <header className="flex flex-wrap relative h-8 p-3 container m-auto">
    <h1 className="h1 text-2xl font-bold absolute left-3">Home</h1>

    <nav className="header m-auto flex gap-2">
      {/* <router.Link to="/home">Home</router.Link> */}
      <router.Link to="/artworks">Artworks / Museum</router.Link>
      {/* {links.map((linkProps, index) => (
          <Link {...linkProps} key={index} />
          // <router.Link to={linkProps.path} key={index}>
          //   {linkProps.children}
          // </router.Link>
        ))} */}
    </nav>
  </header>
);
