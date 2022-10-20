import { IMessageState, MessagesAction, MessagesActionTypes } from "../../types/messages"

const defaultState: IMessageState = {
    messages: [],
    isFetching: false,
    errorMessage: "",
    newMessage: null
}

export const messagesReducer = (state: IMessageState = defaultState, action: MessagesAction): IMessageState => {
    switch (action.type) {

        case MessagesActionTypes.FETCH_MESSAGES:
            return { ...state, isFetching: true }
        case MessagesActionTypes.FETCH_MESSAGES_SUCCES:
            return { ...state, isFetching: false, messages: action.payload }
        case MessagesActionTypes.FETCH_MESSAGES_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload }

        case MessagesActionTypes.FETCH_CURRENT_MESSAGE:
            return { ...state, isFetching: true }
        case MessagesActionTypes.FETCH_CURRENT_MESSAGE_SUCCES:
            return { ...state, isFetching: false, newMessage:action.payload}
           
        case MessagesActionTypes.FETCH_CURRENT_MESSAGE_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload }

        case MessagesActionTypes.READ_MESSAGE:
            return { ...state, isFetching: true }
        case MessagesActionTypes.READ_MESSAGE_SUCCES:
            return { ...state, isFetching: false, newMessage: null, messages:state.messages.map(e=>e.id === action.payload?{...e,unreadMessages:0}:e) }
        case MessagesActionTypes.READ_MESSAGE_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload }

        case MessagesActionTypes.GET_ACCES_TOKEN:
            return { ...state, isFetching: true }
        case MessagesActionTypes.GET_ACCES_TOKEN_SUCCES:
            return { ...state, isFetching: false }
        case MessagesActionTypes.GET_ACCES_TOKEN_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload }

        case MessagesActionTypes.REFRESHE_TOKEN:
            return { ...state, isFetching: true }
        case MessagesActionTypes.REFRESHE_TOKEN_SUCCES:
            return { ...state, isFetching: false }
        case MessagesActionTypes.REFRESHE_TOKEN_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload }
        default:
            return state

        case MessagesActionTypes.NEW_MESSAGE:
            return { ...state, newMessage: action.payload }
        case MessagesActionTypes.NEW_MESSAGE_CLEAR:
            return { ...state, newMessage: null }
    }

}