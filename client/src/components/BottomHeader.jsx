import React from "react";
import { NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";

export default function BottomHeader() {
  return (
    <div className="bg-slate-300 h-12 w-auto shadow-2xl flex justify-between items-center px-8  ">
      <nav className="flex gap-4">
        <NavLink
          to="/dashboard"
          className={
            "text-blue-500 font-medium " +
            (window.location.pathname.includes("/dashboard") ? "text-blue-700" : "")
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/tasklist"
          className={
            "text-blue-500 font-medium " +
            (window.location.pathname.includes("/tasklist") ? "text-blue-700" : "")
          }
        >
          Task List
        </NavLink>
        <NavLink
          to="/inventory"
          className={
            "text-blue-500 font-medium " +
            (window.location.pathname.includes("/inventory") ? "text-blue-700" : "")
          }
        >
          Inventory
        </NavLink>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-9 flex items-center gap-2">
        Initiate Task <FaPen />
      </button>
    </div>
  );
}

