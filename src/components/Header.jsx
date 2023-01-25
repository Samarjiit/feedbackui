import React from "react"

import PropTypes from 'prop-types'  //specify which types props should be used 
function Header({text,bgColor,textColor}) {

    const headerStyles={
        backgroundColor:bgColor,
        color:textColor,
    }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps={ //if explicit text is not exist or passed so it will use default props
    text:'Feedback ui',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}
Header.prototype={ 
    text:PropTypes.string , //inow props should be only string types 
    bgColor:PropTypes.string,
    textColor:PropTypes.string,

}

export default Header