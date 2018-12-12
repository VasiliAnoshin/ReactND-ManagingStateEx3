import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
constructor(){
   super();
    this.state = {
           value1 : this.makeNewQuestion()[1],
           value2 : this.makeNewQuestion()[1],
           value3 : this.makeNewQuestion()[2],
           numQuestions : 0,
           numCorrect : 0,
          proposedAnswer :  this.makeNewQuestion()[3]
      }
}
  
  globalStateUpdate = () =>{
  			this.setState((currentState) => ({
                    	value1 :	this.makeNewQuestion()[0],
                      	value2 : 	this.makeNewQuestion()[1],
                  		value3: 	this.makeNewQuestion()[2],
              			proposedAnswer: this.makeNewQuestion()[3]
             }))              
  };
  
	makeNewQuestion = () => {
            const value1 = Math.floor(Math.random() * 100);
            const value2 = Math.floor(Math.random() * 100);
            const value3 = Math.floor(Math.random() * 100);
            const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
            return [value1, value2, value3, proposedAnswer];
  };
	
	  falseUpdate = () => {
             if((this.state.value1 + this.state.value2 + this.state.value3) !== this.state.proposedAnswer)
             {
					this.setState((currentState) => ({
                    	numCorrect : this.state.numCorrect+1,
                      	numQuestions : currentState.numQuestions + 1
                    }))              
              }else{
                      this.setState((currentState) => ({
                          numQuestions : currentState.numQuestions + 1
                      }))
              }
         this.globalStateUpdate();
      }
      
       trueUpdate = (score) => {
              if((this.state.value1 + this.state.value2 + this.state.value3) ===this.state.proposedAnswer)
              {
					this.setState((currentState) => ({
                    	numCorrect : this.state.numCorrect+1
                    }))              
              }
              this.setState((currentState) => ({
                  numQuestions : currentState.numQuestions + 1
         }))
          this.globalStateUpdate();
        }

		updateProposedAnswer = (answer) => {
        	 this.setState((currentState) => ({
                  proposedAnswer :answer
         }))
        }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = 			${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.trueUpdate}  className='true-update'>True</button>
          <button onClick={this.falseUpdate} className='false-update'>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
