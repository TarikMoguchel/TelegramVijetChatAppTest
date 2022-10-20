import { licensesNumber } from "./ids";
// var Pusher = require("pusher");
import Pusher from 'pusher-js'

export const startListening = (AddNewMessage:any, fetchMessages:any) => {
        console.log("Hello")
        let pusher = new Pusher('ChatsAppApiProdKey', {
            wsHost: 'socket.chatapp.online',
            wssPort: 6001,
            disableStats: true,
            authEndpoint: 'https://api.chatapp.online/broadcasting/auth',
            auth: {
                headers: {
                    'Authorization': localStorage.getItem("accessToken") // персональный токен, полученный методом https://api.chatapp.online/docs/#1-v1tokens-POSTv1-tokens
                }
            },
            enabledTransports: ['ws'],
            forceTLS: true
        })
        console.log("Dee")



        let channel2 = pusher.subscribe(`private-v1.licenses.${licensesNumber}.messengers.telegram`);

        channel2.bind('message', (data:any) => {
            console.log(data)
            var currentMessage = data.payload.data[0]
            AddNewMessage(currentMessage)
            fetchMessages()
        });

        channel2.bind('messageStatus', (data:any) => {
            console.log(data);
        });
        console.log(pusher)
      


}