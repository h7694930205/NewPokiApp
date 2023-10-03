import React from 'react'
import { useParams } from 'react-router-dom'
import ContestType from './Components/ContestType'
import ContestEffects from './Components/ContestEffects';
import SuperContestEffects from './Components/SuperContestEffects';

const ContestDetails = () => {
  const {listId} = useParams();
  return (
    <div>
<ContestType id = {parseInt(listId as string)}/>
<ContestEffects id = {parseInt(listId as string)}/>
<SuperContestEffects id = {parseInt(listId as string)}/>
    </div>
  )
}

export default ContestDetails
