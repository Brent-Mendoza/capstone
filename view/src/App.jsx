import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Landing from "./pages/Landing"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
