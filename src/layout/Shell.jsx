import { NavLink, Outlet } from "react-router-dom";

export default function Shell() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
      {/* Top navigation bar */}
      <nav className="bg-zinc-800 border-b border-zinc-700 px-6 py-4 flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-amber-400 font-bold" : "text-zinc-300"
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            isActive ? "text-amber-400 font-bold" : "text-zinc-300"
          }
        >
          Stats
        </NavLink>

        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            isActive ? "text-amber-400 font-bold" : "text-zinc-300"
          }
        >
          Leaderboard
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "text-amber-400 font-bold" : "text-zinc-300"
          }
        >
          Settings
        </NavLink>
      </nav>

      {/* Main page content */}
      <main className="p-6 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
