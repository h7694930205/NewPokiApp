import React from 'react'
import { useParams } from 'react-router-dom'
import MoveAilments from './Components/MoveAilments';
import MoveTarget from './Components/MoveTarget';
import BattleStyle from './Components/BattleStyle';
import Categories from './Components/Categories';
import DamageClass from './Components/DamageClass';
import LearnMethod from './Components/LearnMethod';


const MoveDetails = () => {
  const {listId} = useParams();
  return (
    <div>
<MoveAilments id = {parseInt(listId as string)}/>
<MoveTarget id = {parseInt(listId as string)}/>
<BattleStyle id = {parseInt(listId as string)}/>
<Categories id = {parseInt(listId as string)}/>
<DamageClass id = {parseInt(listId as string)}/>
<LearnMethod id = {parseInt(listId as string)}/>

    </div>
  )
}

export default MoveDetails
