import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { TextComp, initialStates } from '../helper';



const TextComponent = ({ handleKeyDown, handleKeyUp, charArray }:TextComp) => {
    const { correct, currIndex, timer, start }: initialStates = useSelector((state: any) => state.stateSlice);
    const prop = timer === 0? {} : {tabIndex: 0};
    const divRef = useRef<HTMLInputElement>(null);

    // Removing cursor functionality before start or after time completion
    if(!start || timer === 0){  
        divRef.current?.classList.remove('clicked')
    }

    return (
        <div className="show-text" 
        {...prop}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onClick={() => divRef.current?.setAttribute("class", "show-text clicked")}
        ref={divRef}
        >
            {
                charArray.map((char, index) => (
                    char === ' '? 
                        <span key={index} className= {index === currIndex? 'space active' : 'space'}><span></span></span> 
                        //space
                        : 

                        <span  //normal content
                        key={index} 
                        className = {
                            index === currIndex?   //checking current for cursor
                                (
                                    correct.includes(index)?  //current && correct
                                        'active correct'
                                    :
                                    currIndex>index?   //current && wrong
                                        'active wrong'
                                    :
                                        'active'    //current && not typed yet
                                )
                                :
                                (
                                    correct.includes(index)?    // correct
                                        'correct'
                                    :
                                    currIndex>index?  //wrong
                                        'wrong'
                                    :
                                        ''          //yet to come in the index
                                )
                        }><span></span>{char}</span>
                ))
            }
        </div>
    )
}

export default TextComponent;
