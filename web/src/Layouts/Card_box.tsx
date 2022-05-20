import React from 'react';
import { Card } from 'antd';
import Dog from '../interface/extentedInterface';



export interface DogsProp{
    Dogs: Dog[];
}



const Card_box = ({Dogs}:DogsProp) =>{

    return(
    <div className='grid-3'>
        {Dogs.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
            <Card title={card.nickname} bordered={false} style={{textAlign:"center", width: 300 }} >
            <img src={card.photo} alt="image" />
            <p> Owner : {card.ownerName} </p>
            <p> Breed :  {card.breed}</p>
            <p> Family : {card.family}</p>
            <p> Gender : {card.gender}</p>
            <p> Age : {card.age}</p>
        </Card>
         </div>
        ))}
        
    </div>
        
    )
}

export default  Card_box;
