import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

const TaskForm = ({ addTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [importante, setImportante] = useState(false);
  const descripcionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const descripcion = descripcionRef.current.value;

    if(!titulo.trim() || !descripcion.trim()){
      alert('Campos vacios');
      return;
    }

    const tarea = {
      id: uuid(),
      titulo,
      descripcion,
      importante 
    };

    addTarea(tarea);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
      
        class="col"
        onChange={(e) => setTitulo(e.target.value)}
        type="text"
        placeholder="Ingrese titulo tarea..."
      />
      <input
        class="col"
        ref={descripcionRef}
        type="text"
        placeholder="Ingrese descripcion tarea..."
      />
      <div class="col" className="form-check">
        <input 

          className="form-check-input" 
          type="checkbox" 
          checked={importante}
          onChange={(e) => setImportante(e.target.checked)}
          id="importante"
        />
        <label className="form-check-label me-3">
          Importante
        </label>
      </div>
      <button class="col"type="submit" backgroundColor="#23282B">Agregar</button>
    </form>
  );
};

export default TaskForm;
