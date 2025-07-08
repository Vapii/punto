const TaskItem = ({ tarea, deleteTask }) => {
  const { id, titulo, descripcion, importante } = tarea;

  const handleClick = () => {
    deleteTask(id);
  };

  return (
    <div className={`col-12 col-md-3 mb-3`}>
      <div 
        className="p-3 rounded position-relative" 
        style={{

          backgroundColor: importante ? "#EC7063" : "#FFFFCC",
        }}
      >
        <h5 className={importante ? "text-black" : ""}><strong>{titulo}</strong></h5>
        <p className={importante ? "text-black" : ""}>{descripcion}</p>
        
        <div style={{position:"absolute", top:0, right:0,
                    }}>
          <button 
            onClick={handleClick}
            style={{backgroundColor: importante ? "#EC7063" : "#FFFFCC", 
                    borderColor: importante ? "#EC7063" : "#FFFFCC", boxShadow:'0%'}}
                    color="#000000"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;