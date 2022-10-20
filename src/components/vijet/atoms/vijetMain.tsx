import '../styles/vijet.css'
interface IVijetMain {
    setShowChats: React.Dispatch<React.SetStateAction<boolean>>
    showChats: boolean,
    count:number
}
export const VijetMain = ({ setShowChats, showChats,count }: IVijetMain) => {
    return (
        <div style={{ position: "relative" }}>
            {!showChats?count!==0?<div className='vijet_unread'>{count}</div>:null:null}
            <div className="vijet_icon waves" onClick={() => setShowChats(!showChats)}>!</div>
        </div>

    )

}