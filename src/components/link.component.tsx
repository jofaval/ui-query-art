export type LinkPropsType = {
  path: string;
  children: JSX.Element | JSX.Element[] | string;
};

export const Link: React.FC<LinkPropsType> = ({ children, path }) => (
  <a href={path}>{children}</a>
);
