import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {randomTextGenerator, allowedKeys} from './text'
import TextComponent from './components/TextComponent';
import { RootState } from "./Reducer/store";
import { setTextFinished, setCorrectOrWrong, setStart, calcStats, manageBackspace } from "./Reducer/slice/state"
import Result from './components/Result';
import TimerComponent from './components/TimerComponent';
import { getCurrentDate, getDataFromLocalstorage, getRemark, historyInterface, initialStates } from './helper';
import PreviousDataComponent from './components/PreviousDataComponent';
import RestartComponent from './components/RestartComponent';


function App() {
  const { currIndex, start, currText, timer, wpm, cpm, accurecy, totalCorrect, totalWrong }: initialStates = useSelector((state: any) => state.stateSlice);
  const dispatch = useDispatch<RootState>();
  const charArray = Array.from(currText);
  
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => undefined

  // handling buttons click
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const isAllowed = allowedKeys.includes(e.key);
    const currChar = charArray[currIndex];
    
    // starting the timer
    if(isAllowed && !start)
      dispatch(setStart(true));
      
    // pressed key matched
    if(e.key === currChar){
      if(e.key !== " ") 
        dispatch(setCorrectOrWrong({currIndex, mode: 'correct'}));
      else{
        dispatch(calcStats(currIndex+1));
      }  
    }
    else {
      if(currIndex === charArray.length){
        // handling text changing when time left
        if(e.key === " "){
          dispatch(setTextFinished(randomTextGenerator()));
        }
      }
      else{
        //handling the wrong entry
        if(isAllowed && currChar !== " "){  //typed allowed char in place of another char</HTMLDivElement></HTMLDivElement>
          dispatch(setCorrectOrWrong({currIndex, mode: 'wrong'}));
        }
        // handling backspace click case
        if(e.key === 'Backspace' && currIndex>0){
          charArray[currIndex-1] !== " " && dispatch(manageBackspace(currIndex-1));
        }
      }
    }
  }
  
  // storing the data to the localstorage
  if(!start && timer === 0){
    const localData: historyInterface[] = getDataFromLocalstorage();
    const obj = {date: getCurrentDate(), wpm, cpm, accurecy, totalCorrect, totalWrong, remark: getRemark(wpm)}
    localData.push(obj);
    localStorage.setItem('typingData', JSON.stringify(localData));
  }
  
  
  return (
    <div className="App" >
      <p className='header'>CHECK YOUR TYPING SPEED</p>
      <div className="top-section">
        <TimerComponent />
        <Result />
        <RestartComponent />
      </div>
      <TextComponent {...{handleKeyUp, handleKeyDown, charArray}}/>
      <PreviousDataComponent start = {start} />
      </div>
  );
}

export default App;
