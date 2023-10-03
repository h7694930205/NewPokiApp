import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getEvolutionTriggersAction } from 'redux/EvolutionSlice/EvolutionAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const EvolutionTrigger:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, EvolutionTriggerList} = useSelector((state: IRootState) => {
        return state.evolutionStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getEvolutionTriggersAction({
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
        value: EvolutionTriggerList.name
    },
    {
        label: Strings.names,
        value : EvolutionTriggerList.names.map((item)=>item.name)?.join(" ,")
    },
    {
        label: Strings.pokemonSpecies,
        value :EvolutionTriggerList.pokemon_species.map((item)=>item.name)?.join(" ,")
    },

]
  return (
    <div className='section'>
        <h2>{Strings.evolutionTrigger}</h2>
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
export default EvolutionTrigger
