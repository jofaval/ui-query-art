import { errorsRoute } from ".";

export const notFoundFallbackRoute = errorsRoute.createRoute({
  path: "404",
  element: <NotFound />,
});

function NotFound() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-0">Not found</h1>
    </div>
  );
}
