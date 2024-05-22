import React, { useState } from 'react'
import './Form.css'

export function Form({ onCalcular }) {
    const [numero, setNumero] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        onCalcular(parseInt(numero, 10));
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Favor de Introducir el número n:
                    <input type='number' value={numero} onChange={(e) => setNumero(e.target.value)} />
                </label>
                <button type='submit'>Calcular</button>
            </form>
        </div>

    )
}
