import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBerryDetailsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { getContestEffectsAction, getContestTypesAction } from 'redux/ContestSlice/ContestAsyncThunk'
import { getEncounterConditionValueAction, getEncounterMethodAction } from 'redux/EncounterSlice/EncounterAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { idText } from 'typescript'
export interface Props {
    id: number
}
const EncounterConditionValue:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, EncounterConditionValueList} = useSelector((state: IRootState) => {
        return state.encounterStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getEncounterConditionValueAction({
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
    return <div>Loadig...</div>
}

const data = [
    {
        label: Strings.name,
        value: EncounterConditionValueList.name
    },
    {
        label: Strings.condition,
        value: EncounterConditionValueList.condition.name
    },
    {
        label: Strings.names,
        value :EncounterConditionValueList.names.map((item)=>item.name)?.join(" ,")
    },
    
]
  return (
    <div className='section'>
        <h2>{Strings.encounterConditionValue}</h2>
      {data.map((item) => <DataContent
      value = {item.value}
      label = {item.label}/>)}
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
export default EncounterConditionValue
