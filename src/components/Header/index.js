import React, { useState } from "react"
import { useAuth } from '../../contexts/AuthContext';
import { useHistory,Link } from "react-router-dom"

import './index.css'
function Header() {
  // eslint-disable-next-line
  const [error, setError] = useState("")
  // eslint-disable-next-line
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
      <nav className='navbar'>
        <div>
          
          <Link to="/" className="navlogo"><img src="https://cdn-icons-png.flaticon.com/128/124/124023.png" alt="logo" className="app-logo" /> SOCIAL MEDIA APP</Link>
        </div>
        <div className="items-section">
            <Link to="/" className="navitems">Home</Link>
            <Link to="/createpost" className="navitems">Create</Link>
            <Link to="/profile" className="navitems">Profile</Link>
            <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
        </div>
      </nav>
  );
}

export default Header;