
import { useActions } from "../../../hooks/useActions"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { HoloBorder } from "../atoms/holo_border"
import "../styles/holo_shield.css"

export const HoloShield = () => {
    const { messages, errorMessage } = useTypedSelector(state => state.messages)
    const {FetchCurrentMessage } = useActions()



    return (
        <div className="wrapperShield">
            <HoloBorder classN="mainShield" fillColor="white" />
            <HoloBorder classN="secondShield" fillColor="#3a6b9a" />

            <div className="wrapperTextShield">
                <div className="textShield" style={{ borderRadius: "50% 0 0 50%", width: "15%" }}></div>
                <div className="textShield" style={{ flex: 1 }}></div>
                <div className="textShield" style={{ borderRadius: "0 50% 50% 0", width: "15%" }}></div>
            </div>
            <div className="contentShield">
                <h1>ДЕМОНСТРАЦИЯ РАБОТЫ АПИ</h1>
                {errorMessage ? <h2>{errorMessage}</h2> : ""}
                <p>Смотрите вон туда вниз, там в углу все, на что надо смотреть.</p>
                <p>Пишите сообщения в телеграмм на номер <strong>+79831634517</strong>, и тогда ваши сообщения отображаться внизу</p>
                <p>Ну и за одно я увижу, что кто-то смотрит мое тестовое задание.</p>
                <p>Надеюсь, что это можно считать userFriendly интерфейсом, потому что если разработчику приходится объяснять, как работает программа - это большой минус в карму</p>
                <p>И да - срок лицензии скоро сгорит! У вас меньше суток, чтобы посмотреть, как все работает</p>
            </div>
        </div>

    )
}