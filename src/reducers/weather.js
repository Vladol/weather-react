const initialDefault = {location: process.env.REACT_APP_API_LOCATION_DEFAULT};

export function weather (state = initialDefault, action) {
    switch (action.type) {
        case "WEATHER_FETCH_DATA_SUCCESS":
            return {...state, weatherData: action.payload};
        case "WEATHER_LOCATION_ADD":
            return {...state, location: action.payload}
        default:
            return state;
    }
}