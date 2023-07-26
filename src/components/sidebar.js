import React, { Component } from 'react';

class Sidebar extends Component {
  state = {}
  render() {
    return (
      <div className="sidebar">
        <h1 className="app-title">
          Sticky Notes
        </h1>
       
        <div className="bottom">
          <p className="product-info">
            <span>Made_By</span>
            
            
            <a className='a-tag' href="https://github.com/Sabari7373"
              target="_blank"
              rel="noreferrer">
              Sabari
            </a>
          </p>
        </div>
       
      </div>
    )
  }
}

export default Sidebar;