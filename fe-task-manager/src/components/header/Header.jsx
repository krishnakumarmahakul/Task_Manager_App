import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/addtask" className="text-gray-700 hover:text-blue-500">
                Add Task.
              </Link>
            </li>
            <li>
              <Link to="/alltask" className="text-gray-700 hover:text-blue-500">
                All Tasks
              </Link>
            </li>
            <li>
              <Link to="/taskmodify" className="text-gray-700 hover:text-blue-500">
                Edit Tasks
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
