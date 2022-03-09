import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const newName = e.currentTarget.value.trim()

        if (newName) {
            setName(newName);
            setError('')
        } else {
            setName('')
            setError('please enter a name')
        }

    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello  ${name}!`)
        setName('')
    }

    const totalUsers = users.length

    const onButton = (e: KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === 'Enter' && name) {
            addUser();
        }
    }

    return (
        <Greeting
            onButton={onButton}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
