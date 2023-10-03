import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMoveAilmentAction, getMoveBattleStylesAction, getMoveCategoriesAction } from 'redux/MoveSlice/MoveAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const Categories:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, CategoriesList} = useSelector((state: IRootState) => {
        return state.moveStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getMoveCategoriesAction({
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
        value: CategoriesList.name
    },
    {
        label: Strings.names,
        value :CategoriesList.descriptions.map((item)=>item.description)?.join(" ,")
    },
    {
        label: Strings.name,
        value: CategoriesList.moves.map((item)=>item.name)?.join(" ,")
    },
    
]
return (
    <div className='section'>
  <h2>{Strings.category}</h2>
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
export default Categories
