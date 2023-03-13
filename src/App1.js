import logo from "./store/logo.png";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import Maps from "./components/Maps";
function app1() {
  return (
    <div>
      {/* <center>
        
      </center> */}
      <img
        src={logo}
        style={{
          position: "absolute",
          top: "2%",
          right: "2%",
          width: "50%",
          height: "20%",
        }}
      />
      <div className="container">
        <div className="card1">
          <center>
            <button className="card-button1">
              <Link to="/hospitals">click here</Link>
            </button>
          </center>
        </div>
        <div className="card">
          <h1 className="hd">EMERGENCY</h1>
          <center>
            <button className="card-button">
              <Link to="/doctors" style={{
                backgroundColor: 'yellow',
                
              }}>click here</Link>
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default app1;
