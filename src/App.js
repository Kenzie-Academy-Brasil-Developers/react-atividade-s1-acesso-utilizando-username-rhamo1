import { useState } from "react";
import "./App.css";
import GetUserComponent from "./components/GetUserComponent";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <WelcomePage setIsLoggedIn={setIsLoggedIn} user={user} />
        ) : (
          <GetUserComponent setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
        )}
      </header>
    </div>
  );
}

export default App;
