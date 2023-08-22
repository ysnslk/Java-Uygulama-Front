import "./App.css";
import { UserProvider } from "./context/UserContext";
import UserForm from "./pages/UserForm";
import UserTable from "./pages/UserTable";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <button className="toggleTheme">Toggle Theme</button>
        <h1>User Information App</h1>
        <UserForm />
        <UserTable />
      </div>
    </UserProvider>
  );
}

export default App;
