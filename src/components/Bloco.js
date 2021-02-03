import React from 'react'
import { connect } from 'react-redux'
import Soma from './Soma'
import Subtracao from './Subtracao'
import Multiplicacao from './Multiplicacao'
import Divisao from './Divisao'

import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/actions.js'

function Bloco(props) {

    const {min, max} = props

    return(
        <div className="container border border-1 gerador">
            <h3 className="mt-2 text-center">Gerador de resultados</h3>
            <hr/>

            <div className="numeros container d-flex justify-content-between">
                <span><b>Primeiro número: </b>
                    <input type="number" onChange={e => props.alterarMinimo(+e.target.value)} value={min} />
                </span> 
                <span><b>Segundo número: </b>
                    <input type="number" onChange={e => props.alterarMaximo(+e.target.value)} value={max} />
                </span> 
            </div>
            <hr/>

            <h4 className="text-center mt-3">Resultados</h4>
            <h6 className="text-center">Primeiro número [Operação] Segundo número</h6>
         

            <div className="container d-flex flex-column align-items-center justify-content-around resultados">
                <Soma />
                <Subtracao />
                <Multiplicacao />
                <Divisao />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numero1.min,
        max: state.numero2.max,
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Bloco)