import React from "react";
import "./OrderEditInput.css"


const OrderEditInput = ({editName, items, startValue}) => {
    
    return(startValue ?
        <div className="order-edit-input-form">
            <header className="name-edit-input">{editName}</header>
            <select type="selector" 
            className="filter-order-item">
            <option key={startValue.name} >{startValue.name}</option>
            {items ? 
                items.map((option) => (
                    <option key={option.name} >{option.name}</option>
                )) : null
            }
            </select>
        </div> : null
    )
        
};

export default OrderEditInput;