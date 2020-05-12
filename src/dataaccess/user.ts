import axios from "axios"
import { domainName, loginUserEndPoint } from "../container"

export const login = async (email: string, pass: string) => {
    const loginApi = `${domainName}${loginUserEndPoint}?email=${email}&password=${pass}&device_name=poly`
    return await axios.post(loginApi)
        .then(res => res.data.user_details.id)
        .catch(function (error) { console.log('error') })
}