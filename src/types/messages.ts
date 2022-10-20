
export interface IMessageState {
    messages: any[],//ЛУЧШЕ ДОПИСАТЬ
    isFetching: boolean,
    errorMessage: string,
    newMessage:SingleMessage[]|null
}
interface SingleMessage{
    text:string,
    author:string,
    chatId:string
}

export interface IAccesToken {
    length: number
    success: boolean,
    data: {
        cabinetUserId: number,
        accessToken: string,
        accessTokenEndTime: number,
        refreshToken: string,
        refreshTokenEndTime: number
    }
}
export enum MessagesActionTypes {
    FETCH_MESSAGES = "FETCH_MESSAGES",
    FETCH_MESSAGES_SUCCES = "FETCH_MESSAGES_SUCCES",
    FETCH_MESSAGES_ERROR = "FETCH_MESSAGES_ERROR",

    GET_ACCES_TOKEN = "GET_ACCES_TOKEN",
    GET_ACCES_TOKEN_SUCCES = "GET_ACCES_TOKEN_SUCCES",
    GET_ACCES_TOKEN_ERROR = "GET_ACCES_TOKEN_ERROR",

    REFRESHE_TOKEN = "REFRESHE_TOKEN",
    REFRESHE_TOKEN_SUCCES = "REFRESHE_TOKEN_SUCCES",
    REFRESHE_TOKEN_ERROR = "REFRESHE_TOKEN_ERROR",

    FETCH_CURRENT_MESSAGE = "FETCH_CURRENT_MESSAGE",
    FETCH_CURRENT_MESSAGE_SUCCES = "FETCH_CURRENT_MESSAGE_SUCCES",
    FETCH_CURRENT_MESSAGE_ERROR = "FETCH_CURRENT_MESSAGE_ERROR",

    READ_MESSAGE = "READ_MESSAGE",
    READ_MESSAGE_SUCCES = "READ_MESSAGE_SUCCES",
    READ_MESSAGE_ERROR = "READ_MESSAGE_ERROR",

    NEW_MESSAGE = "NEW_MESSAGE",
    NEW_MESSAGE_CLEAR="NEW_MESSAGE_CLEAR" 
}
//Интерфейсы для загрузки сообщений-------------------------------------------------------------------->
interface FetchMessagesAction {
    type: MessagesActionTypes.FETCH_MESSAGES
}
interface FetchMessagesSuccesAction {
    type: MessagesActionTypes.FETCH_MESSAGES_SUCCES
    payload: any[]
}
interface FetchMessagesErrorAction {
    type: MessagesActionTypes.FETCH_MESSAGES_ERROR
    payload: string
}

//Интерфейсы для конкретного сообщения-------------------------------------------------------------------->

interface FetchCurrentMessageAction {
    type: MessagesActionTypes.FETCH_CURRENT_MESSAGE
}
interface FetchCurrentMessageSuccesAction {
    type: MessagesActionTypes.FETCH_CURRENT_MESSAGE_SUCCES
    payload: any[]
}
interface FetchCurrentMessageErrorAction {
    type: MessagesActionTypes.FETCH_CURRENT_MESSAGE_ERROR
    payload: string
}

//Прочитать сообщение------------------------------------------------------------------------------------>

interface ReadMessageAction {
    type: MessagesActionTypes.READ_MESSAGE
}
interface ReadMessageSuccesAction {
    type: MessagesActionTypes.READ_MESSAGE_SUCCES
    payload:string
}
interface ReadMessageErrorAction {
    type: MessagesActionTypes.READ_MESSAGE_ERROR
    payload: string
}
//Получить токен------------------------------------------------------------------------------------>

interface GetTokenAction {
    type: MessagesActionTypes.GET_ACCES_TOKEN
}
interface GetTokenSuccesAction {
    type: MessagesActionTypes.GET_ACCES_TOKEN_SUCCES
}
interface GetTokenErrorAction {
    type: MessagesActionTypes.GET_ACCES_TOKEN_ERROR
    payload: string
}

//Рефреш токена------------------------------------------------------------------------->
interface RefreshTokenAction {
    type: MessagesActionTypes.REFRESHE_TOKEN
}
interface RefreshTokenSuccesAction {
    type: MessagesActionTypes.REFRESHE_TOKEN_SUCCES
}
interface RefreshTokenErrorAction {
    type: MessagesActionTypes.REFRESHE_TOKEN_ERROR
    payload: string
}

//Новое сообщение------------------------------------------------------------------------->

interface NewMessageAction{
    type: MessagesActionTypes.NEW_MESSAGE
    payload:any
}
interface NewMessageClearAction{
    type: MessagesActionTypes.NEW_MESSAGE_CLEAR
}




export type MessagesAction =
    FetchMessagesAction
    | FetchMessagesSuccesAction
    | FetchMessagesErrorAction
    | FetchCurrentMessageAction
    | FetchCurrentMessageSuccesAction
    | FetchCurrentMessageErrorAction
    | ReadMessageAction
    | ReadMessageSuccesAction
    | ReadMessageErrorAction
    | GetTokenAction
    | GetTokenSuccesAction
    | GetTokenErrorAction
    | RefreshTokenAction
    | RefreshTokenSuccesAction
    | RefreshTokenErrorAction
    | NewMessageAction
    | NewMessageClearAction