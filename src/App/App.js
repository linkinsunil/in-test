import Login from "../Login/Login";
import "./app.css";
import logo from "../assets/generic-logo-hi.png"
import smallLogo from "../assets/digio_logo.jpg"

function App() {
  return (
    <div className="app">

      <div className="nav">
        <div className="left">
          <h5>Sign document using</h5>
          <p>sunil@digio.in</p>
        </div>
        <div className="right">
          <img src={logo} alt="brand-logo" />
        </div>
      </div>
      <div className="main">
        <Login />
      </div>
      <div className="footer">
        <div className="left">
          <div>
            <img src={smallLogo} alt="brand-logo-small" />
          </div>
          <div>
            <h5>Powered by</h5>
            <p>www.digio.in</p>
          </div>
        </div>
        <div className="right">
          1/3 steps
        </div>
      </div>

    </div>
  );
}

export default App;
