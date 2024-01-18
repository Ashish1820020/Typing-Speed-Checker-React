import { MdOutlineRestartAlt } from "react-icons/md";
import { useDispatch } from "react-redux";
import { RootState } from "../Reducer/store";
import { setResart } from "../Reducer/slice/state"
import { randomTextGenerator } from "../text"

const RestartComponent = () => {
  const dispatch = useDispatch<RootState>();
  return (
    <div className="input-section">
        <div className="icon" onClick={() => dispatch(setResart(randomTextGenerator()))}>
          <MdOutlineRestartAlt />
        </div>
    </div>
  )
}

export default RestartComponent;
