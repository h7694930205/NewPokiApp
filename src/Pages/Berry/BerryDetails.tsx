import React from 'react'
import Berries from './Components/Berries'
import Firmnesses from './Components/Firmnesses'
import Flavors from './Components/Flavors'
import { useParams } from 'react-router-dom'

const BerryDetails = () => {
  const {listId} = useParams();
  return (
    <div>
<Berries id = {parseInt(listId as string)}/> 
<Firmnesses id = {parseInt(listId as string)}/>
<Flavors id = {parseInt(listId as string)}/>
    </div>
  )
}

export default BerryDetails
