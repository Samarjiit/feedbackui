import React from "react"
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
function FeedbackList({feedback,handleDelete}) {

  return (
    <div className="feedback-list">
    {feedback.map((item)=>(
         <FeedbackItem key={item.id} item={item}
         handleDelete={handleDelete}  //passing handle delete as a prop into feedback item and in feedback item we are catching the handle delete and calling onclick (button)
         />
    ))}

</div>
  )
}

FeedbackList.propTypes={
  feedback:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList