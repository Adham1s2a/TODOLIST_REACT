import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [showAdd, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //For save task
  const onsave = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const addedtask = await res.json();

    setTasks([...tasks, addedtask]);
  };

  //Add task button
  const AddTaskbutton = () => {
    setShow(!showAdd);
  };

  //Delete task

  const DeleteTask = async (id) => {
    const res = fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    (await res).status === 200 ?
    setTasks(tasks.filter((task) => task.id !== id))
    :alert('something went worng')
  };

  //toggle reminder task

  const onToggle = async (id) => {
    const updatedtask = await fetchTask(id);
    const updtask = { ...updatedtask, reminder: !updatedtask.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updtask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className='container appclass'>
        <Header
          title='TO DO LIST'
          Addtaskbutton={AddTaskbutton}
          show={showAdd}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAdd && <AddTask onAdd={onsave} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={DeleteTask}
                  onToggle={onToggle}
                />
              ) : (
                "No tasks to show "
              )}
            </>
          )}
        />

        <Route path='/about' component={About} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
 