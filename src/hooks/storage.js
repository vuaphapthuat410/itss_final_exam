import {useState, React} from 'react'

const useStorage = ({ input }) => {
    const [data, setData] = useState(input);
    const [arr, setArr] = useState(input);

    const deleteName = (name) => {
        setArr(arr.filter(x => x !== name));
    }
    return {data,arr,deleteName};
};

export default useStorage;