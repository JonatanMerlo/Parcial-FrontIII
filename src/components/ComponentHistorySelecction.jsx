const ComponentHistorySelecction = ({opcionA, opcionB, handleClick}) => {

    

    return(
     <>
        <div className="opciones">
            <div className="opcion">
                <button className="botones" id="A" onClick={(e) => handleClick(e)}>A</button>
                <h2>{opcionA}</h2>
            </div>
            <div className="opcion">
                <button className="botones" id="B" onClick={(e) => handleClick(e)}>B</button>
                <h2>{opcionB}</h2>
            </div>
        </div>
     </>   
    )


}

export default ComponentHistorySelecction;