import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../Data/TrendData'
const TrendCard = () => {
  return (
    <div className='trend-card'>
      <h3>Trend for you!</h3>
      {TrendData.map((trend)=>{
        return(
            <div className="trend">
                <span>#{trend.name}</span>
                <span>{trend.shares}k shares</span>
            </div>
        )
      })}
    </div>
  )
}

export default TrendCard
