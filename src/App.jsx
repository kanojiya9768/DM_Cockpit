import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./components/modules/home/Home";
import { Navbar } from "./components/modules/home/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <Navbar />
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
