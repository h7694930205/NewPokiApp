import React from 'react'
import { useParams } from 'react-router-dom'
import EncounterMethod from './Components/EncounterMethod';
import EncounterCondition from './Components/EncounterCondition';
import EncounterConditionValue from './Components/EncounterConditionValue';

const EncounterDetails = () => {
  const {listId} = useParams();
  return (
    <div>

<EncounterMethod id = {parseInt(listId as string)}/>
<EncounterCondition id = {parseInt(listId as string)}/>
<EncounterConditionValue id = {parseInt(listId as string)}/>
    </div>
  )
}

export default EncounterDetails
