const DEFAULT_LOADING_PLACEHOLDER = (
  <>
    <div className="bg-zinc-900 opacity-80 w-full h-full">&nbsp;</div>

    <div className="content fixed w-full h-full top-0 left-0 flex justify-center items-center">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  </>
);

export const Loader: React.FC<{
  children?: JSX.Element | JSX.Element[] | string;
}> = ({ children = DEFAULT_LOADING_PLACEHOLDER }) => (
  <div className="loader fixed top-0 left-0 w-full h-full">{children}</div>
);
