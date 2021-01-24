import React from 'react'
import { connect } from 'react-redux'

function Subtracao(props) {

    const {min, max} = props

    return(
        <div>
            <div>
                <span>
                    <span>Resultado da subtração: <b><u>{min - max}</u></b></span>
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

export default connect(mapStateToProps)(Subtracao)