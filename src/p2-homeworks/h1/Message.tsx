import React from 'react'
import {messageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props: messageDataType) {
    return (
        <div className={s.message}>
            <div><img className={s.ava} src={props.avatar} alt="ava"/></div>
            <div className={s.dialog}>
                <div className={s.dialogData}>
                    <div>{props.name}</div>
                    <div>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
