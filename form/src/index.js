import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bodys from'./bodys';
import Header from './header';



 //function Sample(){
//   return<div>
//        <Bodys/>
//        <Header/>
//   </div>



class First extends Component{
  render(){
    console.log("this",this);
      return<div> first class components{this.props.date} <button onClick={()=> this.props.get("dataa")}>click me</button></div>
  }
}

class Secound extends Component{
  render (){
    return<div>secound class componets</div>
  }
}



class Sample extends Component{

  constructor(){
    super();
    this.state={
      name:"vasanth",
      age:21,
      course:"developer",

    } 

  }

   getDate (param){
    console.log("date",param);
   }


   updates =() =>{
    this.setState({age:90})
   }

  render(){
    
      return<div>
        {this.state.age}
        <button onClick={()=> this.updates.call(this)}>click this1</button>
        <button onClick={()=> this.updates(this)}>click this2</button>
        <button onClick={this.updates}>click this3</button>
        class components <First date="react class" get={this.getDate}/>{" "}
        <Secound/>


      </div>
      
  }
}
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
