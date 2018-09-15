import React, { Component } from 'react';
// import Login from './login/Login';
import Login from '../login/login';

class signup extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            user:'',
            email:'',
            pass:''  
        }
    this.onshow=this.onshow.bind(this);
    this.updateuser=this.updateuser.bind(this);
    this.updateemail=this.updateemail.bind(this);
    this.updatepass=this.updatepass.bind(this);
}

updateuser(e){
    const name=e.target.value;  
    this.setState({user:name});
}
updateemail(e){
    const email=e.target.value;
    this.setState({email:email});

}
updatepass(e){
    const password=e.target.value;
    this.setState({pass:password});
}


onshow(){
    const {user,email,pass}=this.state;
    localStorage.setItem("user",user);
    localStorage.setItem("email",email);
    localStorage.setItem("password",pass);
    this.props.show();
    this.setState({user:'',email:'',pass:''});    
}

  render() {
    //   console.log("rende r"+this.props.show);
    return (
      <div className="container-fluid">
<h1>SignUp</h1>
        <div className="row">
            
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <input type="text" placeholder="enter name here" onChange={this.updateuser} className="form-control" value={this.state.user}/>
          <br/>
            <input type="email" onChange={this.updateemail} placeholder="enter Email here" className="form-control"  value={this.state.email}  />
            <br/>
            <input type="password" onChange={this.updatepass} placeholder="enter password here" className="form-control" value={this.state.pass} />
            <br/>
             <button className="btn btn-danger" style={{width:"100%"}} onClick={this.onshow}>Signup</button>
            
            </div>
           <div className="col-md-4"></div>
        </div>

      </div>
    );
  }
}

export default signup;
