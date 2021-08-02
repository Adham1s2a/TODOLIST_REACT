import { FiDelete } from "react-icons/fi";
import "../App.css";
const Task = ({task,onDelete,onToggle}) => {
  return (
    <div  onDoubleClick ={()=>onToggle(task.id)}
      className={`d-flex justify-content-between ${!task.reminder ? 'reminder' : ''}`}
      style={{
        backgroundColor: "Gainsboro",
        margin: "2px",
       
      }}
      
    >
      <h3 style={{ margin: "1%" }}>{task.text}</h3>
      <FiDelete
        onClick={() => onDelete(task.id)}
       
        style={{
          color: "red",
          width: "40px",
          height: "30px",
          margin: "1%",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Task;
