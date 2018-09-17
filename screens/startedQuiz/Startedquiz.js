import React, { Component } from 'react';
class Startedquiz extends Component {
    constructor(props){
        super(props);
        this.state={
            time: 0,
        }
        this.continue = this.continue.bind(this);    
        this.updateKey = this.updateKey.bind(this);
    this.localStorageItems = this.localStorageItems.bind(this);
    this.chk = this.chk.bind(this);

        console.log(this.props.resTwo);
        this.chk();
    }

    chk(){
        const { startedQuiz,resTwo } = this.props;
        var user = JSON.parse(localStorage.getItem('name'));
        var name = user;
     
       
       
    }
    render() { 
        const { openQuizpage,startedQuizpage,startPageBack } = this.props;

        return ( 
            <div class="container">
            
<nav class="navbar navbar-primary bg-primary">
            <span class="navbar-brand mb-0 h1" style={{color: 'white'}}>QUIZ APP</span>
            
          </nav>
               {/* <h1>{startedQuiz.time}</h1>
               <h1>{startedQuiz.key}</h1> */}
               <div class="col-md-12">
  <div class="card-header">
  Enter Key to Continue
  </div>
  <div class="card-body">
    <h5 class="card-title">{openQuizpage.name} Quiz</h5>
    <p class="card-text">Time : {startedQuizpage.time}</p>
    <input type="number" class="form-control" onChange={this.updateKey} value={this.state.key} placeholder="Enter Key" />
    <button class="btn btn-primary btn-lg mt-2" onClick={() => this.continue()}>Continue</button>
  </div>
</div>
            </div>
         );
    }

    continue(){
        // if(startedQuiz)
        this.localStorageItems();
        const { startedQuizpage,keyCheckedFunc ,startPageBack} = this.props;
        const { key } = this.state;
        if(key == startedQuizpage.key){
            // console.log(key);
            // keyCheckedFunc();
            // startPageBack();
        }
    }

    localStorageItems(){
        const { openQuizPage, startedQuiz, msqNum, nextNum,thisstates } = this.props;
        // console.log(openQuizPage);
        // console.log(startedQuiz);
        // console.log(msqNum);
        // console.log(thisstates);
    
        localStorage.setItem('quizStarted','yes');
        localStorage.setItem('thisstate',JSON.stringify(thisstates));
        // localStorage.setItem('startedQuiz',JSON.stringify(startedQuiz));
        // localStorage.setItem('msqNum',JSON.stringify(msqNum+1));
    
      }

    updateKey(e){
        this.setState({key : e.target.value});
    }
}
 
export default Startedquiz;


// WEBPACK FOOTER //
// ./src/screens/start.js