import React from "react"
import "./header.css"


const Header = ({black}) => {
  return (
    <header className={black ? "black" : ' '}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg" alt="Logo_Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
        </a>
      </div>
    </header>
  )
}

export default Header