import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{background:"#9477778a"}}>
        <div className="col-md-3"></div>
        <div className="col-md-4">
        <h1 style={{ textAlign: 'right'}}>Quiz App</h1>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-1">
        
        <button style={{marginTop:10}}>Signup</button>

               
        </div>
        <div className="col-md-1">
        <button style={{marginTop:10}}>Login</button>
        </div>
        </div>
      </div>
    );
  }
}

export default header;
