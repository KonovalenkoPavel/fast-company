import React, { useState } from "react";

const Bookmark = (props) => {
    const [isChacked, setIsChacked] = useState(false)
    
    const handleChange = () => {
        setIsChacked(!isChacked)
    }

    const isShow = isChacked 
    ? 
    <i className="bi bi-bookmark-check"></i>
    : 
    <i className="bi bi-bookmark"></i>
    return <div onClick={() => handleChange()}>
        {isShow}
        </div>
}

export default Bookmark