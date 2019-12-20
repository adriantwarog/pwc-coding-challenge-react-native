import axios from "axios";
import { observable, computed } from "mobx";

// Import API KEY (stored separately for security)
import DATA_API_KEY from './DATA_API_KEY'

// Prepare URL based on development or live environment
let apiEnvironment = process.env.NODE_ENV === "development" ? "dev" : "dev" // no product api endpoint provided
let apiDomain = "https://lreypjgj1c.execute-api.ap-southeast-2.amazonaws.com"
let baseURL = `${apiDomain}/${apiEnvironment}`;

// Application store class
export default class AppStore {

    // Prepare store api using base url and API key
    api = axios.create({ baseURL, headers: { ...DATA_API_KEY } });

    // Prepare attribute for storing component map view reference
    mapview

    // Initialize the application with the pre-defined departure list
    constructor(){ this.getDepartureList()}

    // Configuration for API calls
    @observable departureTimeMin = "2024-07-02T23:10:00.000Z"
    @observable departureTimeMax = "2024-08-08T06:00:00.000Z"
    @observable typeId = 0
    @observable loading = true
    @observable error = false

    // Generate URL friendly string for API calls
    @computed get departureTimeMinURI() { return encodeURI(this.departureTimeMin)}
    @computed get departureTimeMaxURI() { return encodeURI(this.departureTimeMax)}

    // Departures
    @observable departures = []

    // Get/update the current departure list using the class state
    getDepartureList = async () => {
        try {
            // Initialise loading state
            this.loading = true

            // Deconstruct the response to get the array list of departures
            let { data: { result: { transportation: { modes: departureList }}}} = 
                await this.api.get(`/transportation?departureTimeMin=${this.departureTimeMinURI}&departureTimeMax=${this.departureTimeMaxURI}&typeId=${this.typeId}`)

            // Apply the data set to the store departure array
            this.departures = departureList

            // Finalize loading
            this.loading = false

            // Use map view reference to center on new gps locations
            this.mapview.fitToElements(true)

            // Catch any errors that may occur and display an error state
        } catch (err){
            this.error = true
            console.log(err)
        }
    }

    // Update filters currently set in the store
    // Simple update method, for more complex states, recommend custom methods
    handleUpdateFilters = (filter, value) => {
        this[filter] = value

        // After the store state has been updated, get the latest departures using new state
        this.getDepartureList()
    }


}