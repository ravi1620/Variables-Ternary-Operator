import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MarksSheet
       studentName="Krishna"
       telMarks="100"
       hindiMarks="100"
       engMarks="100"
       mathsMarks="100"
       sciMarks="100"
       sociMarks="100"></MarksSheet>
       <MarksSheet
       studentName="Amul"
       telMarks="56"
       hindiMarks="5"
       engMarks="4"
       mathsMarks="3"
       sciMarks="2"
       sociMarks="1"></MarksSheet>
       <MarksSheet
       studentName="Madhu"
       telMarks="55"
       hindiMarks="45"
       engMarks="35"
       mathsMarks="25"
       sciMarks="15"
       sociMarks="5"></MarksSheet>
       <MarksSheet
       studentName="Rahul"
       telMarks="62"
       hindiMarks="53"
       engMarks="20"
       mathsMarks="30"
       sciMarks="40"
       sociMarks="50"></MarksSheet>
      </div>
    );
  }
}

export default App;
