export interface initialStates{
    currText: string,
    correct: number[],
    wrong: number[],
    currIndex: number,
    start: boolean,
    timer: number,
    wpm: number,
    cpm: number,
    accurecy: number,
    totalCorrect: number,
    totalWrong: number
}

export interface stats{ cpm: number, accurecy: number };

export interface TextComp {
    charArray: string[];
    handleKeyUp: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export interface historyInterface{
    date: string,
    totalCorrect: number,
    totalWrong: number,
    wpm: number,
    cpm: number,
    accurecy: number,
    remark: string
}


export const getDataFromLocalstorage = () => {
    const res = localStorage.getItem('typingData');
    if(res === undefined || res === null) return [];
    return JSON.parse(res);
}

export const getCurrentDate = () => {
    const dateObj = new Date();
    return `${dateObj.getUTCDate()}/${dateObj.getUTCMonth() + 1}/${dateObj.getUTCFullYear()}`;
}

export const getRemark = (wpm: number) => {
    if(wpm <= 20) return 'very slow';
    if(wpm > 20 && wpm <= 35) return 'slow';
    if(wpm > 35 && wpm <= 40) return 'Average';
    if(wpm > 40 && wpm <= 60) return 'Fast';
    if(wpm > 60 && wpm <= 100) return 'Very Fast';
    return 'Top 1%'
}
