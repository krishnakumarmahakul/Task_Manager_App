import React, { useEffect, useState } from "react";
import axios from "axios";

function Taskmodify() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
      
  }, []);

  function deletTask(id) {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      })
      .catch((err) => console.log("Error deleting task", err));
  }
   

  return (
    <>
      {tasks.map((tsk) => (
        <div
          key={tsk._id} // ✅ Corrected key
          className="p-5 bg-white shadow-lg shadow-grey-300 rounded-xl mb-3 flex justify-between items-center transition-all duration-300 hover:shadow-2xl hover:shadow-grey-400 hover:scale-[1.02]"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{tsk.title}</h3>
            <p className="text-gray-500">{tsk.description}</p>
          </div>
          <div>
            <button
              onClick={() => deletTask(tsk._id)} // ✅ Correct event handler
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>

            <button  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ml-4">
              Update
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Taskmodify;
