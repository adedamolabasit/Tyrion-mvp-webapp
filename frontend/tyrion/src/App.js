import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutesObjects from "./routes";
// import { Dashboard } from "./components/layout/Dashboard";
// import Faqs from "./components/Faqs";

function App() {
  return (
    <div className="w-full overflow-x-hidden font-DMSans  ">
      <Router>
        <Routes>
          {RoutesObjects.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))}
        </Routes>
      </Router>
      {/* <Dashboard>
        <Faqs />
      </Dashboard> */}
    </div>
  );
}
// end

export default App;
