import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrementarContador, incrementarContador } from '../actions/counterAction';

export const Button = () => {

    const dispatch = useDispatch();
    const count = useSelector(store => store.contador.count)

const handleAumentar = () => {
    dispatch(incrementarContador())
}

const handleDisminuir = () => {
    dispatch(decrementarContador())
}

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleAumentar}>aumentar</button>
            <button onClick={handleDisminuir}>disminuir</button>
        </div>
    )
}
