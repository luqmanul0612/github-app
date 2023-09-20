import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { queryClient } from "./lib/utils/api";
import AccessToken from "./pages/AccessToken";
import SearchUserPage from "./pages/SearchUserPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <SearchUserPage />,
      },
      {
        path: "access-token",
        element: <AccessToken />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
