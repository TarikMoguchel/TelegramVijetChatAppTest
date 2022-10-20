
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import '../styles/vijet.css'

interface IVijet{
    name:string
    count:number
    chatId:string
}
export const VijetMessage = ({count,name,chatId}:IVijet) => {
    const {FetchCurrentMessage} = useActions()
    return (
        <div style={{position:"relative"}}>
            <div className='vijet_unread'>{count}</div>
            <div className="vijet_icon" onClick={()=>{
                    FetchCurrentMessage(chatId)
            }} >{name.substring(0,1).toUpperCase()}</div>
        </div>
    )
}