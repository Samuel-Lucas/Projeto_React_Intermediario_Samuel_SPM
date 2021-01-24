import React from 'react'
import { connect } from 'react-redux'

function Multiplicacao(props) {

    const {min, max} = props

    return(
        <div>
            <div>
                <span>
                    <span>Resultado da multiplicação: <b><u>{min * max}</u></b></span>
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

export default connect(mapStateToProps)(Multiplicacao)