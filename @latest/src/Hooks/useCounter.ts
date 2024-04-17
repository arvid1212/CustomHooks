import { useState } from "react";

const initiialValue:any

 export const useCounter  = (initiialValue(0)) =() => {
        const [count,setCount] = useState<number>(0);
        const decrement = () : void => { setCount((v) => v -1 );


        };
        const increment =  (): void => { setCount((v) => v +1 );
 };
        return { count,increment,decrement};
};