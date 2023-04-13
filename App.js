import React from "react"
import Navbar from "./components/Navbar"
import data from "./data"
import Card from "./components/Card"


export default function App() {
    const dataEl = data.map(details=>{
        return (
          <Card 
          key={details.id}
          img={details.imageUrl}
          title={details.title}
          location={details.location}
          googleMapsUrl={details.googleMapsUrl}
          startDate = {details.startDate}
          endDate={details.endDate}
          description={details.description}
         />
        ) 
    })
  return (
      <div>
    <Navbar/>
    
        { dataEl }

    </div>
  )
}