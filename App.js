import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderLayout from './header/headerlayout/header';
import Signup from './screens/signup/signup';
import Login from './screens/login/login';
import Main from './screens/mainpage/main';
class App extends Component {
  constructor(){
    super();
    this.state={
      islogin:false,
      issignup:false,
      quizez:[{name:"React",Question:"40",time:"1hour"},
      {name:"Angular",Question:"30",time:"1hour"},
      {name:"Php",Question:"40",time:"1hour"},
      {name:"Asp.net",Question:"20",time:"1hour"},
    ]

    }
    this.show=this.show.bind(this);
    this.onlogin=this.onlogin.bind(this);
    // this.showtable=this.showtable.bind(this);
  }
  show(){
    this.setState({issignup:true}); 
  
  }
  onlogin(){
    this.setState({islogin:true});
    console.log("asdsa");
  }
  render() {
    const {issignup,islogin,quizez}=this.state;
    return (
      <div className="App">
      
        <HeaderLayout />
        <br/>
        {!issignup && <Signup show={this.show} />}
        {issignup && !islogin && <Login onlogin={this.onlogin}/>}
        {issignup && islogin && <Main list={quizez} />}
      </div>
    );
  }
}

export default App;
