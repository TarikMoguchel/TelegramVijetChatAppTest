import { useEffect, useState } from "react"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { SplashMessage } from "../atoms/splashMessage"
import { VijetMain } from "../atoms/vijetMain"
import { VijetMessage } from "../atoms/vijetMessage"
import '../styles/vijet.css'

export const Vijet = () => {
    const { messages, newMessage } = useTypedSelector(state => state.messages)
    const [showChats, setShowChats] = useState<boolean>(false)
    const [messageCount, setMessageCount] = useState(0)

    useEffect(() => {
        var initialValue = 0;
        messages.forEach((prev) => {
            initialValue = initialValue + prev.unreadMessages
        })
        setMessageCount(initialValue)
    }, [messages])

    return (
        <div className="vijet_wrapper">
            <VijetMain showChats={showChats} setShowChats={setShowChats} count={messageCount} />
            <div className={!showChats ? "vijet_chats show_chats" : "vijet_chats"}>
                {messageCount !== 0 ?
                    messages.map((e, i) => {
                        return e.unreadMessages !== 0 ? <VijetMessage key={i} name={e.name} count={e.unreadMessages} chatId={e.id} /> : null
                    })
                    : <p style={{ width: "70px", color: "white", fontSize: "12px", textAlign:"center" }}>нет сообщений</p>
                }
            </div>
            <SplashMessage />
        </div>
    )
}