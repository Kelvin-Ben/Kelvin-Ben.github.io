import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Root />}>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Route>))

const App = () => {
  return (
    <div className="w-full h-screen bg-customWhite">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
