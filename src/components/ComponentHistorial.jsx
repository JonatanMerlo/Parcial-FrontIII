
const ComponentTextHistory = ({historial, seleccionPrevia}) => {

        return(
            <div className="recordatorio">
                    <h3>Seleccion anterior: {seleccionPrevia}</h3>
                    <h4>Historial de opciones elegidas: </h4>
                        <ul>
                            {historial.map(anterior => <li>{anterior}</li>)}
                        </ul>
            </div>
        )
        
}



export default ComponentTextHistory;
