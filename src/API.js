import axios from "axios"

const BASE_URL = "https://api.spacexdata.com/v3/"

export const getAllRocket = (setValue) => {
    axios.get(`${BASE_URL}rockets`)
            .then(res => {
                setValue(res?.data)
            })
            .catch(err => console.log(err))
}

export const getSingleRocketByRocketId = (rocketID, setValue) => {
    axios.get(`${BASE_URL}rockets/${rocketID}`)
            .then(res => {
                setValue(res?.data)
            })
            .catch(err => {
                console.log(err)
            })
}

export const getCapsuleByFilter = (data, setValue) => {
    const params = {};
    if (data.status) params.status = data.status;
    if (data.original_launch) params.original_launch = data.original_launch;
    if (data.type) params.type = data.type;

    axios.get(`${BASE_URL}capsules`, { params })
            .then(res => {
                setValue(res?.data)
            })
            .catch(err => {
                console.log(err);
            })
}