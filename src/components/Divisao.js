import React from 'react'
import { connect } from 'react-redux'

function Divisao(props) {

    const {min, max} = props  

    return(
        <div>
            <div>
                <span>
                    <span>Resultado da divisão: <b><u>{min !== 0 || max !== 0 ? (min / max).toFixed(2) : ''}</u></b></span>
                </span>
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

export default connect(mapStateToProps)(Divisao)