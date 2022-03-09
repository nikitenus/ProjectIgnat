import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onButton: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onButton, totalUsers}
) => {
    const inputClass = error ? s.error : ""

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                onBlur={setNameCallback}
                className={inputClass}
                onKeyPress={onButton}
            />
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
