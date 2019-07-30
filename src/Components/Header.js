import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "menu"
    };
  }

  toggleMenu = () => {
    if (this.state.menuStatus === "menu-open") {
      this.setState({ menuStatus: "menu-close" });
    } else {
      this.setState({ menuStatus: "menu-open" });
    }
  };

  render() {
    return (
      <>
        <nav>
          <ul>
            <strong>
              <li>Start Boostrap</li>
            </strong>

            <img
              onClick={this.toggleMenu}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvR6qGEKA9V7qKkg4fAvrusJUZppqAiR9KyKtpHQOOIjkk4H3M"
              alt="Hamburger Menu"
            />

            <div className="nav-wrapper">
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </div>
          </ul>
        </nav>
        <div className={this.state.menuStatus}>
          <li>SERVICES</li>
          <li>PORTFOLIO</li>
          <li>ABOUT</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </div>
      </>
    );
  }
}
