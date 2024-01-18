import { getDataFromLocalstorage, historyInterface } from '../helper';
import { useEffect, useState } from 'react';


const PreviousDataComponent = ({start}: {start: boolean}) => {
    const [showHistory, setShowHistory] = useState<boolean>(false);
    const [prevData, setPrevData] = useState<historyInterface[]>([]);
    useEffect(() => {
        const localData = getDataFromLocalstorage();
        setPrevData(localData);
    }, [showHistory, start])
    return (
        <>
        <div className="button-container">
            <button className='history-button' onClick={() => setShowHistory(!showHistory)}> {showHistory? "Hide History" : "Show History"} </button>
        </div>
            {
                showHistory &&(
                prevData.length>0?
                <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Correct Words</th>
                        <th>Incorrect Words</th>
                        <th>CPM</th>
                        <th>WPM</th>
                        <th>Accurecy</th>
                        <th>Performance</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            prevData.map(({date, totalCorrect, totalWrong, wpm, cpm, accurecy, remark}, index) => {
                                return (
                                    <tr key={date+index}>
                                        <td>{date}</td>
                                        <td>{totalCorrect}</td>
                                        <td>{totalWrong}</td>
                                        <td>{cpm}</td>
                                        <td>{wpm}</td>
                                        <td>{accurecy}</td>
                                        <td>{remark}</td>
                                        <td>remove</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            :
            <p className='notice'>No Previous Data to show</p>
            )}
        </>
    )
}

export default PreviousDataComponent;
