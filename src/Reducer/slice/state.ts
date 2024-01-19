import { createSlice } from '@reduxjs/toolkit';
import { initialStates, stats } from '../../helper';
import { randomTextGenerator } from '../../text';

const initialState: initialStates = {
  currText: randomTextGenerator(),
  correct: [],
  wrong: [],
  totalCorrect: 0,
  totalWrong: 0,
  currIndex: 0,
  start: false,
  timer: 60,
  wpm: 0,
  cpm: 0,
  accurecy: 0
}

const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
      setCurrText(state, action){
        state.currText = action.payload;
      },
      setCorrectOrWrong: (state, action) => {
        if(action.payload.mode === 'correct'){
          state.correct = [...state.correct, action.payload.currIndex];
          state.totalCorrect += 1;
        }else{
          state.wrong = [...state.wrong, action.payload.currIndex];
          state.totalWrong += 1;
        }
        state.currIndex = action.payload.currIndex+1;
        const stats = getStats(state.totalCorrect, state.totalWrong);
        state.cpm = stats.cpm;
        state.accurecy = stats.accurecy;
      },
      setTextFinished(state, action){
        const stats = getStats(state.totalCorrect, state.totalWrong);
        state.currText = action.payload;
        state.wpm = state.wpm +1;
        state.cpm = stats.cpm;
        state.accurecy = stats.accurecy;
        state.correct = [];
        state.wrong = [];
        state.currIndex = 0;
      },
      setCurrIndex: (state, action) => {
        state.currIndex = action.payload;
      },
      setStart: (state, action) => {
        state.start = action.payload;
      },
      setTimer: (state, action) => {
        state.timer = action.payload;
      },
      manageBackspace: (state, action) => {
        state.currIndex = action.payload;
        if(state.correct.includes(state.currIndex)){
          state.totalCorrect -= 1;
          state.correct.pop();
        }
        else{
          state.totalWrong -= 1;
          state.wrong.pop();
        }
      },
      setResart: (state, action) => {
        state.timer = 60;
        state.start = false;
        state.correct = [];
        state.wrong = [];
        state.currText = action.payload;
        state.wpm = 0;
        state.cpm = 0;
        state.accurecy = 0;
        state.currText = action.payload;
        state.currIndex = 0;
        state.totalCorrect = 0;
        state.totalWrong = 0;
      },
      calcStats(state, action){
        const stats = getStats(state.totalCorrect, state.totalWrong);
        state.currIndex = action.payload;
        state.wpm = state.wpm + 1;
        state.cpm = stats.cpm;
        state.accurecy = stats.accurecy;
      }
    }
  });

  function getStats(totalCorrect: number, totalWrong: number): stats{
    const cpm = totalCorrect + totalWrong;
    const accurecy = Number(((totalCorrect/cpm) * 100).toFixed(2));
    return {cpm, accurecy};
  }
  export const { setCurrIndex, setTimer, setResart, setStart, calcStats, setCurrText, setTextFinished, manageBackspace, setCorrectOrWrong } = stateSlice.actions;
  export default stateSlice.reducer;