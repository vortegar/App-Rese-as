import './testimonios.css'


export const Testimonios = ( props ) => {
  return (
    < >   
        <div className="contenedor-testimonio">
            <img 
                className="imagen-testimonio" 
                alt={ props.alt }
                src={ props.img }
            />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> 
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className="cargo-testimonio">
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className="texto-testimonio">
                    {props.testimonio}
                </p>
            </div>
        </div>
     
    </>
  )
}
