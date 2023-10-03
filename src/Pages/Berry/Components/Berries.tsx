import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getBerryDetailsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import "../Components/CSS/Berries.css"


export interface Props {
    id: number
}
const Berries:React.FC<Props> = ({
    id
}) => {
   
    const dispatch = useAppDispatch()
    const { isLoading, berryList } = useSelector((state: IRootState) => {
        return state.berryStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getBerryDetailsAction({
        id,
    })
    )
}
return () => {
    
  //Reset the current berryList state when components unmouted`
    console.log("components unmounted")
}
    },[id])

if(isLoading) {
    return <div>{Strings.loading}</div>
}

const data = [
    {
        label: Strings.name,
        value: berryList.name
    },
    {
        label: Strings.growth,
        value: berryList.growth_time
    },
    {
        label:  Strings.maxHarvest,
        value: berryList.max_harvest
    },
    {
        label: Strings.naturalGiftPower,
        value: berryList.natural_gift_power
    },
    {
        label: Strings.naturalGiftPowerType,
        value: berryList.natural_gift_type.name
    },
    {
        label: Strings.smoothness,
        value: berryList.smoothness
    },
    {
        label: Strings.soilDryness,
        value: berryList.soil_dryness
    }
]
  return (
    <div className='section'>
  <h2>{Strings.generalDetails}</h2>
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
export default Berries
