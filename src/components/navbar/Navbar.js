import React, { Component } from 'react';
import './Navbar.css';

const MenuItems = [
  { 
    'name': 'Home', 
    'url': '#',
    'cName': 'nav-link'
  },
  { 
    'name': 'Projects',
    'url': '#',
    'cName': 'nav-link'
  },
  { 
    'name': 'Articles',
    'url': '#',
    'cName': 'nav-link'
  },
];

export default class Navbar extends Component {
  state = { clicked : false }

  handleClick = () => {
    this.setState({ clicked : !this.state.clicked });
  }

  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo"><i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          { MenuItems.map((item, index) => {
            return (
              <li key={index}><a className={item.cName} href={item.url}>{item.name}</a></li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
