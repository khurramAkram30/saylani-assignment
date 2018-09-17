import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderLayout from './header/headerlayout/header';
import Signup from './screens/signup/signup';
import Login from './screens/login/login';
import Main from './screens/mainpage/main';
import OpenQuiz from './screens/OpenQuiz/OpenQuiz'
import StartedQuiz from './screens/startedQuiz/Startedquiz';
import McqzPage from './screens/Mcqs/Mcqz';
class App extends Component {
  constructor(){
    super();
    this.state={

     quizez:[
       {
        name:"React",
     list:[
       {
       key:12345, 
      time:"1hour",
      questions:[
        {
          question:"abcd",
          option:['a','b','c'],
          ans:'a'
  
        },
        {
          question:"abcd",
          option:['a','b','c'],
          ans:'b'
  
        },
        {
          question:"abcd",
          option:['a','b','c'],
          ans:'c'
  
        },
        {
          question:"abcd",
          option:['a','b','c'],
          ans:'d'
  
        },]
      
      },
          
      {
        key:12345, 
       time:"1hour",
       questions:[
         {
           question:"abcd",
           option:['a','b','c'],
           ans:'a'
   
         },
         {
           question:"abcd",
           option:['a','b','c'],
           ans:'b'
   
         },
         {
           question:"abcd",
           option:['a','b','c'],
           ans:'c'
   
         },
         {
           question:"abcd",
           option:['a','b','c'],
           ans:'d'
   
         },]
       
       },
       {
        key:12345, 
       time:"1hour",
       questions:[
         {
           question:"abcd",
           option:['a','b','c'],
           ans:'a'
   
         },
         {
           question:"abcd",
           option:['a','b','c'],
           ans:'b'
   
         },
         {
           question:"abcd",
           option:['a','b','c'],
           ans:'c'
   
         },
         {
           question:"abcd",
           option:['a','b','c'],
           ans:'d'
   
         },]
       
       },
        
      
     ]
    },
  // quiz2 end

  {
    name:"Jquery",
 list:[
   {
   key:12345, 
  time:"1hour",
  questions:[
    {
      question:"abcd",
      option:['a','b','c'],
      ans:'a'

    },
    {
      question:"abcd",
      option:['a','b','c'],
      ans:'b'

    },
    {
      question:"abcd",
      option:['a','b','c'],
      ans:'c'

    },
    {
      question:"abcd",
      option:['a','b','c'],
      ans:'d'

    },]
  
  },
      
  {
    key:12345, 
   time:"1hour",
   questions:[
     {
       question:"abcd",
       option:['a','b','c'],
       ans:'a'

     },
     {
       question:"abcd",
       option:['a','b','c'],
       ans:'b'

     },
     {
       question:"abcd",
       option:['a','b','c'],
       ans:'c'

     },
     {
       question:"abcd",
       option:['a','b','c'],
       ans:'d'

     },]
   
   },
   {
    key:12345, 
   time:"1hour",
   questions:[
     {
       question:"abcd",
       option:['a','b','c'],
       ans:'a'

     },
     {
       question:"abcd",
       option:['a','b','c'],
       ans:'b'

     },
     {
       question:"abcd",
       option:['a','b','c'],
       ans:'c'

     },
     {
       question:"abcd",
       option:['a','b','c'],
       ans:'d'

     },]
   
   },
    
  
 ]
},

{
  name:"Angular",
list:[
 {
 key:12345, 
time:"1hour",
questions:[
  {
    question:"abcd",
    option:['a','b','c'],
    ans:'a'

  },
  {
    question:"abcd",
    option:['a','b','c'],
    ans:'b'

  },
  {
    question:"abcd",
    option:['a','b','c'],
    ans:'c'

  },
  {
    question:"abcd",
    option:['a','b','c'],
    ans:'d'

  },]

},
    
{
  key:12345, 
 time:"1hour",
 questions:[
   {
     question:"abcd",
     option:['a','b','c'],
     ans:'a'

   },
   {
     question:"abcd",
     option:['a','b','c'],
     ans:'b'

   },
   {
     question:"abcd",
     option:['a','b','c'],
     ans:'c'

   },
   {
     question:"abcd",
     option:['a','b','c'],
     ans:'d'

   },]
 
 },
 
  

]
// list array end
}
// quizes array end
],
listDisplay:true,
islogin:false,
issignup:true,
openQuizpage:{},
quizstartpage:false,
openQuiz:{},
startedQuiz:{},
keyChecked: false,
result: false,
msqNum: 0,
 length: 0,
result2: false    

}
// state end
this.onlogin=this.onlogin.bind(this);
this.show=this.show.bind(this);
this.disableList=this.disableList.bind(this);
this.myFunc=this.myFunc.bind(this);

this.keyChecke=this.keyChecke.bind(this);
this.startpageback=this.startpageback.bind(this);
this.reestwo=this.reestwo.bind(this);
// console.log(this.state.openquiz);
}
  render() {
    const {issignup,islogin,quizez,listDisplay,msqNum,length,quizstartpage,openQuizpage,keyChecked,result2,result,startedQuiz}=this.state;
    return (
      <div className="App">
      
        <HeaderLayout />
        <br/>
        {/* {!issignup && <Signup show={this.show} />}
        {issignup && !islogin && <Login onlogin={this.onlogin} show={this.show}/>} */}
        {issignup && !islogin && <Main list={quizez} displaylist={this.disableList} thistate={this.state} />}
        {islogin && !quizstartpage && !listDisplay  && < OpenQuiz openQuizpage={openQuizpage}  myFunc={this.myFunc} />}
      {islogin && !listDisplay && quizstartpage && !keyChecked && !result2 && <StartedQuiz openQuizpage={openQuizpage} startedQuizpage={startedQuiz} keyCheckedFunc={this.keychecke} thisstates={this.states} startpageback={this.startpageback} restwo={this.reestwo} /> }
      {islogin && !listDisplay && quizstartpage && keyChecked && !result && !result2 && <McqzPage openQuizpage={openQuizpage} startedQuiz={startedQuiz} msqNum={msqNum} nextNum={this.nextNum} finishMsq={this.finishMsq} tr={this.tr} fl={this.fl} thisstates={this.state} resTwo={this.resTwo}/>}
     
      </div>
    );
  }
  reestwo(){ }
startpageback(){
  this.setState({
    quizstartpage: false,
    keychecked:true


  })
}
  keyChecke(){
    const {keyChecked} =this.state;
    this.setState({
    keychecked:true
    })
  }
      myFunc(index){
        const {quizstartpage,openQuizpage,startedQuiz,listDisplay} =this.state;
        
        var obj=(openQuizpage.list[index]);
        this.setState({
          quizstartpage:true,
          startedQuiz:(openQuizpage.list[index])
        })
        // console.log("sdasdasdas", obj, "", startedQuiz);
      }

  show(){
    this.setState({issignup:true}); 
  
  }
  onlogin(){
    this.setState({islogin:true});
    // console.log("asdsa");
  }
  disableList(res){
    const {listDisplay,openQuizpage,quizez}=this.state;
    // console.log(quizez[res]);
    this.setState({
      listDisplay:false,
      openQuizpage:quizez[res]
    })

// console.log("adxadsa",openQuizpage);
  }

}

export default App;
