import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shell from "./layout/Shell";

import Overview from "./pages/Overview";
import Stats from "./pages/Stats";
import Leaderboard from "./pages/Leaderboard";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter basename="/revision-elo/">
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Overview />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
