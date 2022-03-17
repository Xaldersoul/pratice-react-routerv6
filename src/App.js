import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import UserPage from "./pages/UserPage.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Dashboard from "./pages/Dashboars.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:id" element={<UserInfo />} />
        <Route path="/usuarios" element={<Navigate to="/user" />} />
        <Route path="/dashboard/*" element={<Dashboard to="/user" />}>
          <Route path="welcome" element={<h1>Welcome!!</h1>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
