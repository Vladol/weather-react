/*
* GET WEATHER DATA FROM API
* */
export function weatherFetchDataSuccess(weather) {
    return {
        type: "WEATHER_FETCH_DATA_SUCCESS",
        payload: weather
    }
}

export function weatherFetchData(url) {
    return (dispatch) => {
        fetch(process.env.REACT_APP_API_URL+url+'&appid='+process.env.REACT_APP_API_SECRET+'&units=metric')
            .then(response => {
            if(!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    })
    .then(response => response.json())
    .then(weather => dispatch(weatherFetchDataSuccess(weather)))
    .catch(()=>{});
    }
}

/*
* SET NEW LOCATION FROM FORM
* */
export function weatherLocation(location) {
    return {
        type: "WEATHER_LOCATION_ADD",
        payload: location
    }
}