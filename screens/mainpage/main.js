import React, { Component } from 'react';
import Timng from '../Questionandtiming/timings';
class main extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        // this.enterQuiz=this.enterQuiz.bind(this);
    }

    enterQuiz(index){
        const abc='';
        console.log(index);
        Timng({});
       }
  render() {
      const {list} =this.props;
    return (
    <div className="container">
    <ul>
        {
            list.map((value,index) =>{
                return <li onClick={this.enterQuiz.bind(this,index)} style={{listStyle:"none",width:"100%",background:"#331f1f59",padding:30,marginBottom:10,textAlign:"left",fontSize:25,color:"white"}}>{value.name} <span style={{float:"right",color:"white"}}><i className="fa fa-chevron-right" aria-hidden="true"></i></span></li>
            })
        }


      </ul>
      </div>
    );
  }
}

export default main;
