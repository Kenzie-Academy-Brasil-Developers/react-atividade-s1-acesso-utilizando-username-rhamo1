import { useState } from "react/cjs/react.development";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  return (
    <div className="form-container">
      <form>
        <h2>Digite seu nome:</h2>
        <input
          className="input"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <div></div>
        <button className="botao" onClick={() => HandleLogin(userInput)}>
          Acessar
        </button>
      </form>
    </div>
  );
};

export default GetUserComponent;
