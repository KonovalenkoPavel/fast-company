import React from "react";

const Qualities = (props) => {
    
    return props.user.qualities.map(item => <span key={item._id} className={'badge m-1 text-bg-' + item.color}>{item.name}</span>)
}

export default Qualities