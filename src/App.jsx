import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Projects from "./feature/Projects/Projects";
import About from "./feature/About/About";
import Contact from "./feature/Contact/Contact";
import Home from "./feature/Home/Home";
import { Layout } from "./components/Layout";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>))

const App = () => {
  return (
    <div className="w-auto h-screen bg-customWhite sm:w-[100%]">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
