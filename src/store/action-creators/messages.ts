import { MessagesAction, MessagesActionTypes } from "../../types/messages"
import { Dispatch } from "redux"
import { appId, email, licensesNumber, password } from "../../common/config/ids"
import $api from "../../http"


export const getAccesToken = () => {
    return async (dispatch: Dispatch<MessagesAction>) => {
        try {
            dispatch({ type: MessagesActionTypes.GET_ACCES_TOKEN })
            let body = {
                "email": email,
                "password": password,
                "appId": appId
            };
            await $api.post("/tokens", body,
                {
                    headers:
                    {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }).then(res => {
                    localStorage.setItem('accessToken', res.data.data.accessToken)
                    localStorage.setItem('refreshToken', res.data.data.refreshToken)
                    dispatch({ type: MessagesActionTypes.GET_ACCES_TOKEN_SUCCES })
                })
        } catch (e) {
            dispatch({
                type: MessagesActionTypes.GET_ACCES_TOKEN_ERROR,
                payload: "Не удалось получить токен"
            })
        }
    }
}

export const refreshToken = () => {
    return async (dispatch: Dispatch<MessagesAction>) => {
        try {
            dispatch({ type: MessagesActionTypes.REFRESHE_TOKEN })
            
            await $api.post("/tokens/refresh",
                {
                    headers:
                    {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Refresh": "ut",
                    }
                }).then(res => {
                    localStorage.setItem('accessToken', res.data.data.accessToken)
                    localStorage.setItem('refreshToken', res.data.data.refreshToken)
                    dispatch({ type: MessagesActionTypes.REFRESHE_TOKEN_SUCCES})
                })
        } catch (e) {
            dispatch({
                type: MessagesActionTypes.REFRESHE_TOKEN_ERROR,
                payload: "Не удалось получить токен"
            })
        }
    }
}



export const fetchMessages = () => {

    return async (dispatch: Dispatch<MessagesAction>) => {
        try {
            dispatch({ type: MessagesActionTypes.FETCH_MESSAGES })
            const url =`/licenses/${licensesNumber}/messengers/telegram/chats`
          
            await $api.get(url,
                {
                    headers:
                    {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }).then(response => {
                    console.log(response.data)
                    dispatch({ type: MessagesActionTypes.FETCH_MESSAGES_SUCCES, payload: response.data.data.items })
                }
                );


        } catch (e) {
            dispatch({
                type: MessagesActionTypes.FETCH_MESSAGES_ERROR,
                payload: "Произошла ошибка при загрузке сообщений"
            })
        }
    }
}


export const ReadMessages = (chatId:string) => {

    return async (dispatch: Dispatch<MessagesAction>) => {
        try {
            dispatch({ type: MessagesActionTypes.READ_MESSAGE })
            const url =`/licenses/${licensesNumber}/messengers/telegram/chats/${chatId}/read`
            await $api.patch(url,
                {
                    headers:
                    {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }).then(response => {
                    dispatch({ type: MessagesActionTypes.READ_MESSAGE_SUCCES, payload:chatId})
                }
                );


        } catch (e) {
            dispatch({
                type: MessagesActionTypes.READ_MESSAGE_ERROR,
                payload: "Не получилось прочитать сообщение"
            })
        }
    }

    
}

export const FetchCurrentMessage = ( chatId:string) => {

    return async (dispatch: Dispatch<MessagesAction>) => {
        try {
            dispatch({ type: MessagesActionTypes.FETCH_CURRENT_MESSAGE })
            const url =  `/licenses/${licensesNumber}/messengers/telegram/chats/${chatId}/messages`
           
            await $api.get(url.toString(),
                {
                    headers:
                    {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }).then(response => {
                    dispatch({ type: MessagesActionTypes.FETCH_CURRENT_MESSAGE_SUCCES, 
                        payload:response.data.data.items.map((e: { message: { text: any }; fromUser: { name: any ,id:string};})=>{
                            return {text:e.message.text, author:e.fromUser.name, chatId:e.fromUser.id}
                        })})
                }
                );


        } catch (e) {
            dispatch({
                type: MessagesActionTypes.FETCH_CURRENT_MESSAGE_ERROR,
                payload: "Не получилось загрузить сообщения"
            })
        }
    }

    
}

export const AddNewMessage = (data:any) => {
    return async (dispatch: Dispatch<MessagesAction>) => {        
            dispatch({ type: MessagesActionTypes.NEW_MESSAGE,
                 payload:[{text:data.message.text, author:data.fromUser.name, chatId:data.chat.id}] })
    }
}

export const ClearNewMessage = () => {
    return async (dispatch: Dispatch<MessagesAction>) => {       
            dispatch({ type: MessagesActionTypes.NEW_MESSAGE_CLEAR})
    }
}


