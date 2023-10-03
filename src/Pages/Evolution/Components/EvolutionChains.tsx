import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getEvolutionChainsAction } from 'redux/EvolutionSlice/EvolutionAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const EvolutionChains:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, ChainList} = useSelector((state: IRootState) => {
        return state.evolutionStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getEvolutionChainsAction({
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
        label: "test",
        value: ChainList.turn_upside_down
    },
]
  return (
    <div className='section'>
        <h2>{Strings.evolutionChain}</h2>
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
export default EvolutionChains
