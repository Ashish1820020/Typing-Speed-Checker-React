import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {setStart, setTimer} from "../Reducer/slice/state"
import { RootState } from "../Reducer/store";

const TimerComponent = () => {
    
  const {start, timer} = useSelector ((state: any) => state.stateSlice);
  const dispatch = useDispatch<RootState>();
    useEffect(() => {
      let interval: string | number | NodeJS.Timeout | undefined;
      
      if(start){
        interval = setInterval(() => {
            timer>0 && dispatch(setTimer(timer-1));
            timer===0 && dispatch(setStart(false));
        }, 1000);
      }
      else{
        clearInterval(interval);
      }
        return () => clearInterval(interval);
    }, [timer, start, dispatch]);
    
  return (
    <div className='timer'>
      <div>
        {timer}
        <span>seconds</span>
      </div>
    </div>
  )
}

export default TimerComponent;
