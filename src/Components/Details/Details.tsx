import React, { FC } from 'react'
interface DetailsProps {
    label: string;
    value: string
}
const Details:FC<DetailsProps> = ({
    label,
    value
}) => {
  return (
    <div>
      <label>{label}</label>
      <span>: {value}</span>
    </div>
  )
}

export default Details
