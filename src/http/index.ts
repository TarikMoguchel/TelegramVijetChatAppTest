import axios from 'axios'


export const API_URL ="https://api.chatapp.online/v1"
const $api = axios.create({
    baseURL:API_URL
}) 

$api.interceptors.request.use((config)=>{
    config!.headers!.Authorization = localStorage.getItem('accessToken')
    return config;
})
$api.interceptors.response.use((config)=>{
    return config;
},async (error)=>{
    const originalRequest = error.config;
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true;
        try{

             await axios.post("https://api.chatapp.online/v1/tokens/refresh",{},
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
                return $api.request(originalRequest)       
            })
        }catch(e){

        }
    }
    throw error;
})

export default $api;