
import { useEffect, useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import '../styles/vijet.css'
export const SplashMessage = () => {
    const [spread, setSpread] = useState<boolean>(false)
    const { ReadMessages } = useActions()
    const [text, setText] = useState('')

    const { newMessage, messages } = useTypedSelector(state => state.messages)

    useEffect(() => {
        if (newMessage) {
            console.log( newMessage[0].author)
            console.log( messages)
            var limit = messages.find(e => newMessage[0].author === e.name).unreadMessages
            var text = ''
            if (limit === 0)
                limit = 1
            var long = 0;
            newMessage?.forEach(e => {
                if (long != limit) {
                    text = text + e.text + "\n" + "\r"
                    long++
                }
            })
            setText(text)
        }
    }, [newMessage])
    return (
        <div className={newMessage ? spread ? "vijet_splash_wrapper show spread" : "vijet_splash_wrapper show" : "vijet_splash_wrapper hide"}
            onClick={() => setSpread(!spread)}>
            {newMessage !== null &&
                <>
                    <p className='vijet_splash_title'>{newMessage[0].author}</p>
                    <hr style={{ margin: "0.2rem" }} />
                    <p className='vijet_splash_text' style={spread ? { overflowY: 'scroll', flex: 1, overflowX: 'clip' } : {}}>{!spread ? text.length > 20 ? text.substring(0, 20) + "..." : text : text}</p>
                    {spread && <p className="vijet_splash_mark" onClick={() => ReadMessages(newMessage[0].chatId)}>Пометить прочитанным</p>}
                </>
            }


        </div>
    )
}