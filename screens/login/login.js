import React, { Component } from 'react';
import Main from '../mainpage/main';
class login extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state={
            user:'',
            passwords:''
        }
    this.updateemail=this.updateemail.bind(this);
    this.updatepass=this.updatepass.bind(this);
    this.login=this.login.bind(this);
    }
    updateemail(e){
        const username=e.target.value;
        this.setState({user:username});
    }
    updatepass(e){
        const passwords=e.target.value;
        this.setState({pass:passwords});


    }
    login(){
        const {user , passwords}=this.state;
       
        console.log(user);

        console.log(passwords);

        var email=localStorage.getItem("email");
        var pass=localStorage.getItem("password");
          this.props.onlogin({user : email , passwords: pass });
        
      
    }

  render() {
    return (
      <div className="container-fluid">
           <h1>Login</h1>
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        
        <input type="email" onChange={this.updateemail} placeholder="enter Email here" className="form-control"  value={this.state.email}  />
            <br/>
            <input type="password" onChange={this.updatepass} placeholder="enter password here" className="form-control"  />
            <br/>
             <button className="btn btn-info" style={{width:"100%"}} onClick={this.login}>Login</button>
             {/* <button className="btn btn-info" onclick={this.props.show}> Register</button> */}
            
        </div>
        
        
        
        <div className="col-md-4"></div>

           
        </div>

      </div>
    );
  }
}

export default login;
