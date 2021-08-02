
import Task from './Task';
const Tasks = ({tasks,onDelete,onToggle}) => {
  
  return (
    
    <div style={{marginTop:'5%'}} className="d-flex flex-column bd-highlight mb-3">
      {tasks.map((task) => (
        <Task className="p-2 bd-highlight"  key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default Tasks;
