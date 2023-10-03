import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getSuperContestEffectsAction } from 'redux/ContestSlice/ContestAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const SuperContestEffects:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, SuperContestEffectsList} = useSelector((state: IRootState) => {
        return state.contestStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getSuperContestEffectsAction({
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
        label: Strings.appeal,
        value: SuperContestEffectsList.appeal
    },
    {
        label: Strings.flavorTextEntries,
        value: SuperContestEffectsList.flavor_text_entries.map((item)=>item.flavor_text)?.join(" , ")
    },
    {
        label: Strings.moves,
        value: SuperContestEffectsList.moves.map((item)=>item.name)?.join(" , ")
    },

]
  return (
    <div className='section'>
        <h2>{Strings.superContestEffects}</h2>
      {data?.map((item) => <DataContent value = {item.value} label = {item.label}/>)}
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
export default SuperContestEffects
