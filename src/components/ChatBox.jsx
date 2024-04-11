import { useState } from "react";
import bubble from '../assets/chat.svg';

const ChatBox = () => {
    const [messages, setMessages] = useState([])
    return (
        <>
        <img src={bubble}></img>
        </>
    )
}

export default ChatBox;