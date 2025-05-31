import { Route, Routes } from "react-router-dom";
import "./assets/css/tailwind.css";
import HomePage from "./pages/HomePage";
import CommonLayout from "./components/common/CommonLayout";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/banner" element={<Banner />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
