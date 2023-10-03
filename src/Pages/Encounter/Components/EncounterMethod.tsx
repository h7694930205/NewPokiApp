import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBerryDetailsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { getContestEffectsAction, getContestTypesAction } from 'redux/ContestSlice/ContestAsyncThunk'
import { getEncounterMethodAction } from 'redux/EncounterSlice/EncounterAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { idText } from 'typescript'
export interface Props {
    id: number
}
const EncounterMethod:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, EncounterMethodList} = useSelector((state: IRootState) => {
        return state.encounterStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getEncounterMethodAction({
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
        value: EncounterMethodList.name
    },
    {
        label: Strings.order,
        value :EncounterMethodList.order
    },
    {
        label: Strings.names,
        value :EncounterMethodList.names.map((item)=>item.name)?.join(" ,")
    },

]
  return (
    <div className='section'>
        <h2>{Strings.encounterMethod}</h2>
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
export default EncounterMethod
