import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMoveAilmentAction, getMoveBattleStylesAction, getMoveDamageClassesAction } from 'redux/MoveSlice/MoveAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const DamageClass:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, DamageClassList} = useSelector((state: IRootState) => {
        return state.moveStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getMoveDamageClassesAction({
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
        value: DamageClassList.name
    },
    {
        label: Strings.name,
        value: DamageClassList.moves.map((item)=>item.name)?.join(" ,")
    },
    {
        label: Strings.names,
        value :DamageClassList.descriptions.map((item)=>item.description)?.join(" ,")
    },
    
]
return (
    <div className='section'>
  <h2>{Strings.damageClass}</h2>
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
export default DamageClass
