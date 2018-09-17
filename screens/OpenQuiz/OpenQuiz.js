import React, { Component } from 'react';
// import Main from '../mainpage/main';
class OpenQuiz extends Component {
 constructor(props){
super();
}
render() {
  // console.log(this.props.myFunc);
  console.log(this.props.openQuizpage.name);
    const {openQuizpage,myFunc} =this.props;
    return (
      <div className="container-fluid">
           <h1>Open Quiz</h1>
      {/* {openQuizpage.name} */}
      {/*  */}
    
       <ul className="list-group col-md-12">
             <li className="list-group-item active">{openQuizpage.name}</li>
                 {
                     openQuizpage.list.map((value,index) => {
                        
                 return <li className="list-group-item" onClick={() => myFunc(index)}>QUIZ {index + 1}</li>
                     })
                 }
                 </ul>
     
      {/*  */}
      </div>
    );
  }
  
  start(index){
    const { myFunc } = this.props;
    console.log('first/*****' + index);
    myFunc(index);
}

}

export default OpenQuiz;
