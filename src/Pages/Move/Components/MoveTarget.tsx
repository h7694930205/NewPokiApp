import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMoveTargetAction } from 'redux/MoveSlice/MoveAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const MoveTarget:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, MoveTargetsList} = useSelector((state: IRootState) => {
        return state.moveStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getMoveTargetAction({
        id,
    })
    )
}
return () => {

    console.log("components unmounted")
}
    },[id])

if(isLoading) {
    return <div>Loadig...</div>
}

const data = [
    {
        label: Strings.name,
         value: MoveTargetsList.name
    },
    {
        label: Strings.name,
         value: MoveTargetsList.moves.map((item)=>item.name)?.join(" ,")
    },
     {
         label: "values",
         value : MoveTargetsList.descriptions.map((item)=>item.description)?.join(" ,")
     },
     {
         label: "names",
         value :MoveTargetsList.names.map((item)=>item.name)?.join(" ,")
    },

]
  return (
    <div className='section'>
        <h2>{Strings.target}</h2>
      {data.map((item) => <DataContent value = {item.value} label = {item.label}/>)}
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
export default MoveTarget
