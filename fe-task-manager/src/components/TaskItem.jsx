import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="p-5 bg-white shadow-lg shadow-grey-300 rounded-xl mb-3 flex justify-between items-center transition-all duration-300 hover:shadow-2xl hover:shadow-grey-400 hover:scale-[1.02]">
  <div>
    <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
    <p className="text-gray-500">{task.description}</p>
  </div>
</div>

  );
};

export default TaskItem;
