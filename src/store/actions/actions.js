export function alterarNumeroMinimo(novoNumero) {
    return {
        type: 'INPUT_1_ALTERADO',
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: 'INPUT_2_ALTERADO',
        payload: novoNumero
    }
}