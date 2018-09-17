import React, { Component } from 'react';
// import Timng from '../Questionandtiming/timings';
class main extends Component {
    constructor(props){
        super(props);
        this.state={
            time:false,
            // states:props.thistate
        }
        // console.log(this.props.displaylist);
        // this.enterQuiz=this.enterQuiz.bind(this);
    }

    enterQuiz(index){
        const {time} =this.state;
        this.setState({time:true})
        console.log(index);
        // Timng({});
       }
       render() {
        // console.log(this.state.states.quizez);
      const {displaylist,list} =this.props;
      const{time}=this.state;
    return (
    <div className="container">
    <ul>
        {
            list.map((value,index) =>{
                return <li  style={{listStyle:"none",width:"100%",background:"#331f1f59",padding:30,marginBottom:10,textAlign:"left",fontSize:25,color:"white"}}>{value.name} <span style={{float:"right",color:"white"}}><i onClick={()=>displaylist(index)} className="fa fa-chevron-right" aria-hidden="true"></i></span></li>
            })
        }


     
      </ul>
      </div>
    );
  }
}

export default main;
