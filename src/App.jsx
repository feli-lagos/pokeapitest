import { useEffect, useState } from 'react'
import './App.css'
import { Card } from 'react-bootstrap'


function App() {
  const [pkmn, setPkmn] = useState(null)

  const buscarPkmn = async()=>{

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/ditto"
    )

    const data= await response.json()

    setPkmn(data)

    console.log(data)
  }

useEffect(() => {
  buscarPkmn()
}, [])

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <Card.Text>
              {pkmn?.name}
            </Card.Text>
          </Card.Title>
            <Card.Text>
              #{pkmn?.id}
            </Card.Text>
            <Card.Text>
              Peso: {pkmn?.weight}
            </Card.Text>
          <Card.Img 
                className="pokemon-img" 
                src={pkmn?.sprites.other.dream_world.front_default}
                />
        </Card.Body>
          <Card.Text>
              <marquee>SALUDOS CORDIALES</marquee>
            </Card.Text>
      </Card>

    </>
  )
}

export default App
