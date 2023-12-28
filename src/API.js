import axios from "axios"

const BASE_URL = "https://api.spacexdata.com/v3/"

export const getAllRocket = (setValue) => {
    axios.get(`${BASE_URL}rockets`)
            .then(res => {
                setValue(res?.data)
            })
            .catch(err => console.log(err))
}