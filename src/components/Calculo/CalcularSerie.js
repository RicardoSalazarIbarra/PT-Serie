import React from 'react'
import serie from '../../serie'

export function CalcularSerie({ numero, onResultado }) {
    React.useEffect(() => {
        if (numero != null) {
            const resultado = serie.serie(numero);
            onResultado(resultado);
        }
    }, [numero, onResultado]);
    return null;
}
