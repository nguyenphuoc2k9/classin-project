import React from 'react'
import { CiTrash } from "react-icons/ci";
import Complete_card from './card/Complete_card';


const Complete = ({ todo, delete_all, delete_one }) => {
    return (
        <div className="details">
            {
                todo.map((element) => (
                    <Complete_card key={element.id} element={element} delete_one={delete_one}/>
                ))
            }
            <button onClick={() => delete_all()}>Delete All<CiTrash size="30px" color='#fff'/></button>
        </div>
    )
}

export default Complete