import React from 'react'
import { CiTrash } from "react-icons/ci";

const Complete_card = ({element,delete_one}) => {
    return (
        <div className="card">
            <div className="info">
                <input type="checkbox" checked />
                <h3 className='com'>{element.task}</h3>
            </div>
            <div className="delete">
                <CiTrash size="30px" onClick={() => delete_one(element.id)} />
            </div>
        </div>
    )
}

export default Complete_card