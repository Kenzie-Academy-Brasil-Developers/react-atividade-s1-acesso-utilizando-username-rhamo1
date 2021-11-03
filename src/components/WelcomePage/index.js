const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="form-container">
      <h2>Olá {user}, bom ver você por aqui! </h2>
      <button className="botao" onClick={() => HandleLogout()}>
        Logout
      </button>
    </div>
  );
};

export default WelcomePage;
