import React, { Component } from 'react';
// import { TYPES } from './constants';
import './App.css'
class App extends Component {
  state = {
     level: [
      [0, 0, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 3, 0, 2, 1, 0],
      [1, 1, 1, 0, 0, 0, 1, 0],
      [1, 0, 1, 1, 2, 0, 1, 0],
      [1, 0, 1, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
     ]
  };

  findPlayerPosition () {
    const level = this.state.level;
    let position;
    level.forEach((row, rowIndex) => {
      const cellIndex = row.findIndex((cell) => cell === 3);
      if (cellIndex !== -1) {
        position = {row: rowIndex, cell: cellIndex};
      }
    })
    if (!position) {
      throw new Error('player not found!');
    }
    return position
  }
 
  moveLeft = () => {
    const position = this.findPlayerPosition();
    const level = [ ...this.state.level ];
    const leftCell = level[position.row][position.cell-1];
    console.log(leftCell)
    console.log(level[position.cell])
    // if (leftCell) {
    //   return;
    // }
    if (leftCell === 0) {
      level[position.row][position.cell] = 0;
      level[position.row][position.cell - 1] = 3;
    }
    this.setState({ level });
    console.log(position)
  }

  moveDown = () => {
    const position = this.findPlayerPosition();
    const level = [ ...this.state.level ];
    const downCell = level[position.row + 1][position.cell];
    if(downCell===0) {
      level[position.row][position.cell]=0;
      level[position.row+1][position.cell]=3
    }
    this.setState({level})
  }
 moveRight=()=> {
   const position = this.findPlayerPosition();
   const level = [...this.state.level];
   const rightCell = level[position.row][position.cell+1];
   if(rightCell===0) {
     level[position.row][position.cell]=0;
     level[position.row][position.cell+1]=3
   }
   this.setState({level})
 }
 moveUp=()=>{
   const position = this.findPlayerPosition();
   const level = [...this.state.level]
   const upCell = level[position.row][position.cell-1];
   console.log(upCell)
   if(upCell===0) {
     level[position.row][position.cell]=0;
     level[position.row-1][position.cell]=3;
   }
   this.setState({level})
 }
  
  
  render() {
    
     
       // eslint-disable-next-line
    var data = this.state.level.map((row) => { // eslint-disable-next-line
      return row.map((cell, i) => {
        switch (cell) {
          case 0: return <div className='floor' key={i}></div>
          case 1: return <div className='wall' key={i}></div>
          case 2: return <div className='box' key={i}></div>
          case 3: return <div className='player' key={i}></div>
          default:
            break;  
        }
      });
    });
    
    return (
      <div>
     <div className='container'>{ data }</div>
     <div className='button'>
        <button onClick={this.moveLeft}>left</button>
      <button onClick={this.moveRight}>right</button>
      <button onClick={this.moveUp}>up</button>
      <button onClick={this.moveDown}>down</button>
     </div>
     
     </div>
    );
  }
}
 
export default App;
