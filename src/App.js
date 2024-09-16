import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame8 from "./pages/Frame8";
import Frame_step2 from "./pages/Frame_step2";
import Frame_step3 from "./pages/Frame_step3";
import Frame9 from "./pages/Frame9";
import Frame10 from "./pages/Frame10";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/room/done/":
        title = "";
        metaDescription = "";
        break;
      case "/saved/":
        title = "";
        metaDescription = "";
        break;
      case "/our-aim/":
        title = "";
        metaDescription = "";
        break;
      case "/faq/":
        title = "";
        metaDescription = "";
        break;
      case "/contact/":
        title = "";
        metaDescription = "";
        break;
      case "/warranty/":
        title = "";
        metaDescription = "";
        break;
      case "/company-details/":
        title = "";
        metaDescription = "";
        break;
      case "/personal/":
        title = "";
        metaDescription = "";
        break;
      case "/step/2/":
        title = "";
        metaDescription = "";
        break;
      case "/step/3/":
        title = "";
        metaDescription = "";
        break;
      case "/terms-of-service/":
        title = "";
        metaDescription = "";
        break;
      case "/public-offer/":
        title = "";
        metaDescription = "";
        break;

    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/saved/" element={<Frame2 />} />
      <Route path="/our-aim/" element={<Frame3 />} />
      <Route path="/faq/" element={<Frame4 />} />
      <Route path="/contact/" element={<Frame5 />} />
      <Route path="/warranty/" element={<Frame6 />} />
      <Route path="/company-details/" element={<Frame7 />} />
      <Route path="/personal/" element={<Frame8 />} />
      <Route path="/step/2/" element={<Frame_step2 />} />
      <Route path="/step/3/" element={<Frame_step3 />} />
      <Route path="/room/done/" element={<Frame1 />} />
      <Route path="/terms-of-service/" element={<Frame9 />} />
      <Route path="/public-offer/" element={<Frame10 />} />
    </Routes>
  );
}
export default App;
