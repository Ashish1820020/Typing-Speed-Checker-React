import { useSelector } from "react-redux";
import { initialStates } from "../helper";

const Result = () => {
  const { wpm, cpm, accurecy, totalCorrect, totalWrong }: initialStates = useSelector((state: any) => state.stateSlice);
  
  return (
    <div className='result-container'>
        <div className='wpm box'>{wpm} <span>words/min</span></div>
        <div className='cpm box'>{cpm} <span>chars/min</span></div>
        <div className='accurecy box'>{accurecy} <span>% accuracy</span></div>
        <div className='accurecy box'>{totalCorrect} <span>correct words</span></div>
        <div className='accurecy box'>{totalWrong} <span>incorrect words</span></div>
    </div>
  )
}

export default Result
