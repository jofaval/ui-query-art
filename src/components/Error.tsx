export const ErrorWrapper: React.FC<{ error: Error }> = ({ error }) => (
  <div className="error">
    <h1 className="h1">{error.name}</h1>
    <p className="p">{error.message}</p>
  </div>
);
