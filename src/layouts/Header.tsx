import { PATHS } from "@/routes/constants/paths";

import { LinkPropsType } from "@/components/Link";
import { Link } from "@/components/Link";

const links = [{ children: "Home", path: PATHS.HOME }] as LinkPropsType[];

export const Header: React.FC = () => (
  <header className="flex flex-wrap relative h-8">
    <h1 className="h1 text-2xl font-bold absolute left-0">Home</h1>

    <nav className="header m-auto flex">
      {links.map((linkProps, index) => (
        <Link {...linkProps} key={index} />
      ))}
    </nav>
  </header>
);
