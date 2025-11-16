import React from 'react'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'
// passing objects
let myObj={
  name: 'Joy',
  age:21,
  address:{
    city:'kolkata',
    country:'India'

  }
}
// passing arrays
let newArr = [1,2,3,4,5,6,7]

function App() {


  return (
    <>   
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Hi, I am Joy 😎
      </h1>
      <Card/>
      <Card2 username="chaicode" post='design engg.'/>
      <Card2 username='JSON' post='staff engg.'/>
      <Card2 username='TOON' myArr= {newArr} />
      <Card2 myArr={myObj} />
    
    
    
    </>
  )
}

export default App
