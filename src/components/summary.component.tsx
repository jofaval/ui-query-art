export const Summary: React.FC<{
  label: string;
  children: JSX.Element | JSX.Element[] | string;
}> = ({ label, children }) => (
  <summary>
    {label}

    <details>{children}</details>
  </summary>
);
