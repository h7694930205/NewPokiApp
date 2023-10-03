import { FC } from "react";

interface InputProps{
    value: string;
    onChangeHandler: (event: string) => void;
}
const Input: FC<InputProps> =({value, onChangeHandler})=>{
    return(
        <div>
            <input type ="text" value={value} onChange={()=>onChangeHandler} placeholder="write nick name"/>
        </div>
    )
}
export default Input