import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {  //taken a props as feedback as an entire array
 
 //calculate rating average
    let average=feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0)/feedback.length

    average.toFixed(1);  //fixed to 1 decimal place 
    return (
    <div className='feedback-stats'>
    <h4>{feedback.length}</h4>
    <h4>Average Rating:{isNaN(average)?0 :average}</h4>

    </div>
  )
}

FeedbackStats.propTypes={
    feedback:PropTypes.array.isRequired,
}
export default FeedbackStats