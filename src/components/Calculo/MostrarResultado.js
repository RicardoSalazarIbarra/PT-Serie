import React from 'react'

export function MostrarResultado({ resultado }) {
    return (
        <div>
            <h2>Resultado de la serie: </h2>
            <p>{resultado != null ? resultado : 'Introduzca el número para calcular la serie'}</p>
        </div>
    )
}
