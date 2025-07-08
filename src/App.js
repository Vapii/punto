import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="container" style={{backgroundColor: '#666'}}>
      <h1 style={{color: "black"}}>Post it simulator!</h1>
      <TaskManager />
    </div>
  );
}

export default App;
