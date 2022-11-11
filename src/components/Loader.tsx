export const Loader: React.FC<{
  children?: JSX.Element | JSX.Element[] | string;
}> = ({ children = "Loading..." }) => <div className="loader">{children}</div>;
