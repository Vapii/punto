import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const TaskManager = () => {
  const [tareas, setTareas] = useState([]); // Iniciando una lista vacia de tareas

  const addTarea = (tarea) => {
    const esta = tareas.some(t => tarea.titulo === t.titulo )
    if(esta){
        alert('Titulo ya existe')
        return
    }
    setTareas([...tareas, tarea]);
    
    alert('Bien hecho!')
  };

  const deleteTask = (id) => {
    const nueva_lista = tareas.filter((t) => t.id !== id);
    setTareas(nueva_lista);
  };

  return (
  <>
    <TaskForm addTarea={addTarea} />
      <div className="row">
        {tareas.map((t) => (
          <TaskItem
            tarea={t}
            key={t.id}

            deleteTask={deleteTask}
          />
        ))}
      </div>
  </>
);
};

export default TaskManager;
