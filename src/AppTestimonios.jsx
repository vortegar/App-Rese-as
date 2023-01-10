import { personas } from "../data/personas"
import { Testimonios } from "./components/Testimonios"

export const AppTestimonios = () => {
  return (
    <div className="App">
        <div>
            <h1>Esto es lo que dicen los alumnos sobre nosotros</h1>
            {
              personas.map( person => (
                <Testimonios 
                  key = { person.id}
                  { ...person }
                />
              ))
            }
        </div>
    </div>
  )
}
