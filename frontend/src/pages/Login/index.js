import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [nameUser, setNameUser] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await api.post('/sessions', { email, nameUser })
        const { _id } = response.data;
        localStorage.setItem('user', _id);
        history.push('/dashboard');
    }

    return (
        <>
            <p className="pText">
                Venda seus produtos e proporcione momentos de muita <strong>alegria</strong> e <strong>sabor</strong> para seus clientes.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="name">NOME *</label>
                <input
                    id="name"
                    type="name"
                    placeholder="Digite seu nome"
                    value={nameUser}
                    onChange={event => setNameUser(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}