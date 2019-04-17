export function weather (state = [], action) {
    switch (action.type) {
        case "WEATHER_FETCH_DATA_SUCCESS":
            return action.weather;
        case "WEATHER_LOCATION_ADD":
            return {...state, location: action.payload}
        default:
            return state;
    }
}