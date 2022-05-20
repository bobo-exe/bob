import React from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';
import Card_box from './Layouts/Card_box';

const dogsList = [
  {
    breed:"Doberman",
    family:"dog",
    nrLegs:4,
    gender:"male",
    age:3,
    nickname:"Doggy",
    ownerName:"Ivan",
    photo:"https://i.ibb.co/1GPZtX0/Doggy.jpg"
     
  },
  {
    breed:"Buldog",
    family:"dog",
    nrLegs:4,
    gender:"female",
    age:2,
    nickname:"Larra",
    ownerName:"Evanesa",
    photo:"https://i.ibb.co/1LhZNxN/Larra.jpg"
     
  },
  {
    breed:"Pitbull",
    family:"dog",
    nrLegs:4,
    gender:"male",
    age:5,
    nickname:"tRex",
    ownerName:"Petru",
    photo:"https://i.ibb.co/9yJ7WNP/tRex.jpg"
     
  },



]


function App() {
  return (
      <>
        <LayoutCustom></LayoutCustom>
        <p className='text_1'>Data from interface</p>
        <Card_box  
        Dogs={dogsList}
        />
        <FooterNow></FooterNow>
      </>
  );
}

export default App;

