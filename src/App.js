 
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Topnav from "./Components/Topnav/Topnav";
import FourZeroFour from "./Components/FourZeroFour/FourZeroFour";
import { HelmetProvider } from "react-helmet-async";
import logo from "../src/assets/leaplogo.jpg";
import { lazy, Suspense } from "react";
function App() {
  const location = useLocation();

  const delayImport = (importFunction, delay = 200) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(importFunction()), delay)
    );

  const Home = lazy(() =>
    delayImport(() => import("./Components/Home/Home"), 200)
  );
  const Electrotherapy = lazy(() =>
    delayImport(() => import("./Components/Electrotherapy/Electrotherapy"), 200)
  );
  const Physiotherapy = lazy(() =>
    delayImport(() => import("./Components/Physiotherapy/Physiotherapy"), 200)
  );
  const ManualTherapy = lazy(() =>
    delayImport(() => import("./Components/ManualTherapy/ManualTherapy"), 200)
  );
  const SportsInjuries = lazy(() =>
    delayImport(() => import("./Components/SportsInjuries/SportsInjuries"), 200)
  );
  const Rehabilitation = lazy(() =>
    delayImport(() => import("./Components/Rehabilitation/Rehabilitation"), 200)
  );
  const TherapeuticExercise = lazy(() =>
    delayImport(
      () => import("./Components/TherapeuticExercise/TherapeuticExercise"),
      200
    )
  );

  const KinesioTaping = lazy(() =>
    delayImport(() => import("./Components/KinesioTaping/KinesioTaping"), 200)
  );
  const DryneedlingAcupuncture = lazy(() =>
    delayImport(
      () =>
        import("./Components/DryneedlingAcupuncture/DryneedlingAcupuncture"),
      200
    )
  );
  const BackyPain = lazy(() =>
    delayImport(() => import("./Components/BackyPain/BackyPain"), 200)
  );
  const NeckPain = lazy(() =>
    delayImport(() => import("./Components/NeckPain/NeckPain"), 200)
  );
  const ShoulderPain = lazy(() =>
    delayImport(() => import("./Components/ShoulderPain/ShoulderPain"), 200)
  );
  const ElbowPain = lazy(() =>
    delayImport(() => import("./Components/ElbowPain/ElbowPain"), 200)
  );
  const KneePain = lazy(() =>
    delayImport(() => import("./Components/KneePain/KneePain"), 200)
  );
  const HomeContact = lazy(() =>
    delayImport(() => import("./Components/HomeContact/HomeContact"), 200)
  );
  const Blog = lazy(() =>
    delayImport(() => import("./Components/Blog/Blog"), 200)
  );
  const MeetTeam = lazy(() =>
    delayImport(() => import("./Components/MeetTeam/MeetTeam"), 200)
  );
  const HomeAbout = lazy(() =>
    delayImport(() => import("./Components/HomeAbout/HomeAbout"), 200)
  );

  return (
    <div className="">
      <Topnav></Topnav>
      <Nav />
      {/* <NewNav></NewNav> */}
      {/* <Home/> */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <img src={logo} alt="" className="w-48 h-32"  />

          
          </div>
        }
      >
        <HelmetProvider>
          <Routes key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>

            <Route path="/electrothyrapy" element={<Electrotherapy />}></Route>
            <Route path="/physiotherapy" element={<Physiotherapy />}></Route>
            <Route path="/manualtherapy" element={<ManualTherapy />}></Route>
            <Route path="/sports-injuries" element={<SportsInjuries />}></Route>
            <Route path="/rehabilitation" element={<Rehabilitation />}></Route>
            <Route
              path="/therapeutic-exercise"
              element={<TherapeuticExercise></TherapeuticExercise>}
            ></Route>
            <Route
              path="/kinesio-taping-therapy"
              element={<KinesioTaping />}
            ></Route>
            <Route
              path="/dryneedling-acupuncture"
              element={<DryneedlingAcupuncture />}
            ></Route>
            <Route path="/back-pain" element={<BackyPain />}></Route>
            <Route path="/neck-pain" element={<NeckPain />}></Route>
            <Route path="/shoulder-pain" element={<ShoulderPain />}></Route>
            <Route path="/elbow-pain" element={<ElbowPain />}></Route>
            <Route path="/knee-pain" element={<KneePain />}></Route>
            <Route path="/contact" element={<HomeContact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/team" element={<MeetTeam />}></Route>
            <Route path="/about" element={<HomeAbout />}></Route>
            <Route path="/*" element={<FourZeroFour />} />
          </Routes>
        </HelmetProvider>
      </Suspense>

      <Footer />
      {/* demo leap  */}
      {/* <MessengerCustomerChat pageId="103181519238933" appId="690666775772229" /> */}
    </div>
  );
}

export default App;
