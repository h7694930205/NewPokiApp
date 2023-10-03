import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMoveAilmentAction, getMoveBattleStylesAction } from 'redux/MoveSlice/MoveAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const BattleStyle:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, battleStyle} = useSelector((state: IRootState) => {
        return state.moveStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getMoveBattleStylesAction({
        id,
    })
    )
}
return () => {
  //Reset the current berryList state when components unmouted
    console.log("components unmounted")
}
    },[id])

if(isLoading) {
    return <div>{Strings.loading}</div>
}

const data = [
    {
        label: Strings.name,
        value: battleStyle.name
    },
    {
        label: Strings.names,
        value :battleStyle.names.map((item)=>item.name)?.join(" ,")
    },
    
]
return (
    <div className='section'>
  <h2>{Strings.battleStyle}</h2>
  {data.map((item, index) => (
    <DataContent key={index} value={item.value} label={item.label} />
  ))}
</div>
  )
}

const DataContent:FC<any> = ({
 label,
 value
}) => {
    return <div>
        <label>{label}</label>
        <span>: {value}</span>
    </div>
}
export default BattleStyle
