import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import TaskList from "./components/TaskList";
import Taskmodify from "./components/Taskmodify";
import Landing from "./pages/Landing";

function App() {
  const [reload, setReload] = useState(false);

  const handleTaskAdded = () => {
    setReload(!reload);
  };

  return (
    <Router>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Task Manager</h1>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/landing" />} />
            <Route path="/addtask" element={<TaskForm onTaskAdded={handleTaskAdded} />} />
            <Route path="/alltask" element={<TaskList key={reload} />} />
            <Route path="/taskitem" element={<h2 className="text-center text-xl">Task Item Page</h2>} />
            <Route path="/taskmodify" element={<Taskmodify />} />
            <Route path="landing" element={<Landing/>}></Route>
            <Route path="*" element={<h2 className="text-center text-xl">Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
