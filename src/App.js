import React from 'react'
import Navbar from './components/Navbar'
import Attraction from './components/Attraction'
import './App.css'
import data from './data'

function App() {
 const attractions = data.map(item => {
  return (
      <Attraction
        key={item.id}
        {...item}    
      />
    )
})
  return (
    <div className="App">
        <Navbar />
        <section className="attractions-list">
           {attractions}
        </section>
    </div>
  )
}

export default App;
