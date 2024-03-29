import "../Pages/Page Styles/Login.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import logo from "../assets/siteimages/sitelogo/whitelogo.png";


function RegisterAdmin() {
  const [data, setData] = useState({
    name:'',
    email: '',
    password: '',
  })

  const navigate = useNavigate()
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data

    try{
        const {data} = await axios.post('/register' , {
            name, email, password
        })
        if (data.error) {
            toast.error(data.error)
        } else {
            setData('User Made YEY!')
            toast.success
            navigate('/login')
        }
    } catch(error) {
        console.log(error)
    }
    
  }

  return (
    <div className="login-main-cont">
      <div className="login-container">
        <img src={logo} alt="Logo" className="nav-logo" id="nav-logo" />

        <h2 className="login-title">Admin Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="login-input-group">
            <input
              className="name-form"
              type="name"
              id="name"
              value={data.name} // Access email from the state
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Name"
            />
          </div>
          <div className="login-input-group">
            <input
              className="email-form"
              type="email"
              id="email"
              value={data.email} // Access email from the state
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email"
            />
          </div>

          <div className="login-input-group">
            <input
              className="login-password-form"
              type="password"
              id="password"
              value={data.password} // Access password from the state
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Password"
            />
          </div>

          {/* Use Link to navigate to the dashboard */}
          {/* <Link to="/dashboard"> */}
          <button className="login-sign-button" type="submit">
            Register
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default RegisterAdmin;
