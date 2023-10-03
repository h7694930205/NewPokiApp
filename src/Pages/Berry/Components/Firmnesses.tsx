import { Strings } from 'Resource/Strings'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  getBerryFirmnessesAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { Props } from './Berries'
import Details from 'Components/Details/Details'

const Firmnesses:React.FC<Props>= (
    {
    id
}
) => {
    const dispatch = useAppDispatch()
    const { isFirmnessesLoading, firmness} = useSelector((state: IRootState) => {
        return state.berryStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getBerryFirmnessesAction({
        id,
    })
    )
}
    },[id])

if(isFirmnessesLoading) {
    return <div>{Strings.loading}</div>
}
const data = [
    {
        label: Strings.name,
        value: firmness.name
    }
]
  return (
    <div className='section'>
        <h2>{Strings.firmnessesDetails}</h2>
      {data.map((item) => <Details value = {item.value} label = {item.label}/>)}
    </div>
  )
}


export default Firmnesses
