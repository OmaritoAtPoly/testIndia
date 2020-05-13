import axios from "axios"
import { domainName, loginUserEndPoint } from "../container"

export const login = async (email: string, pass: string) => {
    const loginApi = `${domainName}${loginUserEndPoint}?email=${email}&password=${pass}&device_name=poly`
    const user = await axios.post(loginApi)
        .then(res => res.data.user_details)
        .catch(function (error) { console.log('error') })
    console.log(user.id)
    return user ? { id: user.id, first_name: user.first_name, profile_picture: user.profile_picture } : undefined
}