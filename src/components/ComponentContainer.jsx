import React , {Component} from 'react';
import data from './data.json'
import ComponentHistorial from './ComponentHistorial';
import ComponentHistorySelecction from './ComponentHistorySelecction';
import Swal from 'sweetalert2';

class ComponentContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            historial: [],
            seleccionPrevia:""
        };
        this.handleClick = this.actualizarEstado;


    }

    componentDidMount(){
        Swal.fire(
            'Bienvenido',
            'Estás por ser protagonista de la historia más emocionante del mundo...',
            'info'
          )
    }
    

    obternerHistoriaSiguiente(){
        if(this.state.contador === 0){
            return data[0];
        }else{
            let siguiente = `${this.state.contador + 1}${this.state.seleccionPrevia.toLowerCase()}`
            let siguienteHistoria = data.filter(dato => dato.id === siguiente)
            return siguienteHistoria[0]
        }
    }



    actualizarEstado = (e) => {
        let historialArray = this.state.historial;
        if(this.state.contador < 5){
            this.setState({
                contador: this.state.contador + 1,
                historial: historialArray,
                seleccionPrevia: e.target.id
            })
            if(this.state.seleccionPrevia !== "" && this.state.contador < 4){
                historialArray.push(this.state.seleccionPrevia)
            }
        }
    }

    render(){
        if(this.state.contador > 4){
            alert("FIN")
            let final = `${this.state.contador}${this.state.seleccionPrevia.toLowerCase()}`
            let historiaFinal = data.filter(dato => dato.id === final)
            return (
                <div className='layout'>
                    <h1 className='historia'>{historiaFinal[0].historia}</h1>
                    <ComponentHistorySelecction handleClick={this.handleClick} opcionA={historiaFinal[0].opciones.b} opcionB={historiaFinal[0].opciones.b}/>
                    <ComponentHistorial historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia}/>
                </div>
            )
        }
            return (
                <div className='layout'>
                    <h1 className='historia'>{this.obternerHistoriaSiguiente().historia}</h1>
                    <ComponentHistorySelecction handleClick={this.handleClick} opcionA={this.obternerHistoriaSiguiente().opciones.a} opcionB={this.obternerHistoriaSiguiente().opciones.b}/>
                    <ComponentHistorial historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia}/>
                </div>
            )

        
        
    }



}



export default ComponentContainer;