import React from 'react'
import Header from './components/Header'
import TravelCard from './components/TravelCard'
import Data from '../data'
import './App.css'


function App() {
  
  const cards = Data.map(card => {
    return (
      <TravelCard
        key={card.id}
        card={card}
      />
    )
  })
  return (
    <>
      <Header/>
      <section className='travel-cards'>
        {cards}
      </section>
    </>
  )
}

export default App
