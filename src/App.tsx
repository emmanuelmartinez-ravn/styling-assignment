import "./App.css";
import Dashboard from "./components/Dashboard.tsx";
import Home from "./components/Home.tsx";
import Sidebar from "./components/Sidebar.tsx";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Home />
      <Dashboard />
    </div>
  );
}

export default App;
