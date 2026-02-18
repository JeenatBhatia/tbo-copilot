import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Login />
          </div>
        }
      />

      <Route
        path="/signup"
        element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Signup />
          </div>
        }
      />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
