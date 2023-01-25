import React from 'react'
import PropTypes from 'prop-types'
function Card({children,reverse}) {    //basically a style component     //children - node reverse - boolean
  return (
    <div className="card" 
    style={{backgroundColor:reverse?'rgba(0,0,0,0.4)':'#fff',
    color:reverse?'#fff':'#000'}}>{/*//conditional style*/} 
     {children}
     </div>
  )
}

Card.defaultProps={
    reverse:false   //if true and color changed 
}

Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool
}

export default Card