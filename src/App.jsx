import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<ChatPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;