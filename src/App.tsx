import "./App.css";
import Dashboard from "./components/Dashboard.tsx";
import Main from "./components/Home.tsx";
import Sidebar from "./components/Sidebar.tsx";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
      <Dashboard />
    </div>
  );
}

export default App;
