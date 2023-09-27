import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import StoriesPage from "./pages/StoriesPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter basename="/photosnap">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
