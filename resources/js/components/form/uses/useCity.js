import { useState } from 'react';

const useCity = (fun,defualtState)=>{
    const [stateName , setStateName] = useState(defualtState);
    const getCity=(stateVal)=>{
        setStateName(stateVal)
        fun(perv=>({...perv , city:null}))
    }
    return [stateName , getCity]
}

export default useCity;