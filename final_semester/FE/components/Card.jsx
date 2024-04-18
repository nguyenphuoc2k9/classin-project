import React from 'react'

const Card = ({data,OpenDetail}) => {
  return (
    <div className='card' onClick={()=>OpenDetail(data)}>
        <img src={data.image} alt="" />
        <h1>{data.name}</h1>
        <div className="desc">
            <p>{data.time} min</p>
            <p>{data.year}</p>
        </div>
    </div>
  )
}

export default Card