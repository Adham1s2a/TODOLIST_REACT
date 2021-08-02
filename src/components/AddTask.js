import { useState } from "react";
const AddTask = ({onAdd}) => {
  const [text, setTaskName] = useState();
  const [day, setTaskDay] = useState();
  const [reminder, setTaskReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Pelase enter task name");
      return;
    }

    onAdd({text,day,reminder});

    setTaskName('');
    setTaskDay('');
    setTaskReminder (false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>Task name</label>
        <input
          className='form-control'
          type='text'
          placeholder='Set Task Name'
          value={text}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Task Day</label>
        <input
          className='form-control'
          type='text'
          placeholder='Set Task Name'
          value={day}
          onChange={(e) => setTaskDay(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Task Reminder</label>
        <input
          className='form-control'
          type='checkbox'
          value={reminder}
          onChange={(e) => setTaskReminder(!e.currentTarget.checked)}
        />
      </div>
      <button style={{background:'Black',color:'white'}} className='btn btn-block '>Save Task</button>
    </form>
  );
};

export default AddTask;
