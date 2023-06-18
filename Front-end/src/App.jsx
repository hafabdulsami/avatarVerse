import { Routes, Route } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import { Sidebar } from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route
        path="/Home"
        element={
          <>
            <Sidebar />
            <Home />
          </>
        }
      />
      <Route path="/" element={<Page1 />} />
      <Route path="/Login" element={<Page2 />} />
      <Route path="/Signup" element={<Page3 />} />
    </Routes>
  );
}

export default App;
