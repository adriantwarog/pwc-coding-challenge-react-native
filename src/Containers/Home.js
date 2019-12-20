import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { inject, observer } from 'mobx-react'
import { observable } from "mobx";
import DateTimePicker from "react-native-modal-datetime-picker";
import Map from './Map'

// Reusable theme components are imported
import { 
    DepartureImage, DepartureButton, DepartureOptions, DepartureOptionDesc, DepartureOptionTitle, DepartureItem, DepartureItemText, DepartureItemDesc, DepartureIndex, DepartureIndexText, DepartureInfo, DepartureItemsHolder,
    TravelOptionTitle, TravelButton,
    MapView, Section, Desc, Title
 } from '../Components'

//  Normally the containers below will be further separated, but for this technical demo I will be running a  flat structure.

//  Import mobx store and observer
@inject("store")
@observer
class Home extends Component {

    // Set the title for the navigation
    static navigationOptions = {
        title: 'PwC Coding Challenge',
    };

    render() {

        return (
            <ScrollView>
                <DepartingTime />
                <TravelBy />
                <AvailableOptions />
            </ScrollView>
        )
    }
}


// Component for calculating departure dates
@inject("store")
@observer
class DepartingTime extends Component {

    @observable isStartDateTimePickerVisible = false
    @observable isEndDateTimePickerVisible = false

    // Default requirements of the Date component to hide and show
    showStartDateTimePicker = () => this.isStartDateTimePickerVisible =  true
    hideStartDateTimePicker = () => this.isStartDateTimePickerVisible =  false
    showEndDateTimePicker = () => this.isEndDateTimePickerVisible =  true
    hideEndDateTimePicker = () => this.isEndDateTimePickerVisible =  false
    
    // Store is updated with the new date (this automatically kicks off an API call)
    handleStartDatePicked = date => {
        this.hideStartDateTimePicker();
        this.props.store.handleUpdateFilters('departureTimeMin', (new Date(date)).toISOString()) 
    };
    handleEndDatePicked = date => {
        this.hideEndDateTimePicker();
        this.props.store.handleUpdateFilters('departureTimeMax', (new Date(date)).toISOString()) 
    };

    render() {

        const { showStartDateTimePicker, showEndDateTimePicker } = this
        const { departureTimeMin, departureTimeMax } = this.props.store

        return (
            <>
                <SectionTitle 
                    title="1. Departing time"
                    desc="Please select a date range when you are most likely able to depart from." />
              
                <DepartureOptions>
                    <DepartureButton onPress={showStartDateTimePicker} activeOpacity={0.66} >
                        <DepartureImage 
                            resizeMode="contain" 
                            source={require('../Media/undraw_airport_2581.png')} />
                        <DepartureOptionTitle>From</DepartureOptionTitle>
                        <DepartureOptionDesc>{(new Date(departureTimeMin).toLocaleString('en-AU', { hour12: true }))}</DepartureOptionDesc>
                    </DepartureButton>
                    <DepartureButton onPress={showEndDateTimePicker} activeOpacity={0.66} >
                        <DepartureImage 
                            resizeMode="contain" 
                            source={require('../Media/undraw_businesswoman_pc12.png')} />
                        <DepartureOptionTitle>To</DepartureOptionTitle>
                        <DepartureOptionDesc>{(new Date(departureTimeMax).toLocaleString('en-AU', { hour12: true }))}</DepartureOptionDesc>
                    </DepartureButton>
                </DepartureOptions>

                <DateTimePicker
                    mode="datetime"
                    date={new Date(departureTimeMin)}
                    isVisible={this.isStartDateTimePickerVisible}
                    onConfirm={this.handleStartDatePicked}
                    onCancel={this.hideStartDateTimePicker}
                />

                <DateTimePicker
                    mode="datetime"
                    date={new Date(departureTimeMax)}
                    isVisible={this.isEndDateTimePickerVisible}
                    onConfirm={this.handleEndDatePicked}
                    onCancel={this.hideEndDateTimePicker}
                />

            </>
        )
    }
}


// Component to update the type of travel. The handler kicks off a new API request
@inject("store")
@observer
class TravelBy extends Component {
    render() {
        const { typeId, handleUpdateFilters } = this.props.store
        return (
            <>
                <SectionTitle
                    title="2. Travel by"
                    desc="Please select how you wish to travel."
                />
                <DepartureOptions>
                    <TravelButton 
                        active={typeId === 0} 
                        onPress={()=>handleUpdateFilters('typeId', 0)}
                        activeOpacity={0.66} >
                        <DepartureImage 
                            resizeMode="contain" 
                            source={require('../Media/undraw_Map_light_3hjy.png')} />
                        <TravelOptionTitle active={typeId === 0} >
                            Train
                        </TravelOptionTitle>
                    </TravelButton>
                    <TravelButton 
                        onPress={()=>handleUpdateFilters('typeId', 1)}
                        active={typeId === 1} 
                        activeOpacity={0.66} >
                        <DepartureImage 
                            resizeMode="contain" 
                            source={require('../Media/undraw_Map_light_3hjy.png')} />
                        <TravelOptionTitle active={typeId === 1}>
                            Bus
                        </TravelOptionTitle>
                    </TravelButton>
                </DepartureOptions>
            </>
        )
    }
}

// Map and list of options based on the URL results.
@inject("store")
@observer
class AvailableOptions extends Component {
    render() {
        return (
            <>
                <SectionTitle
                    title="3. Available options"
                    desc="Please select the departure you wish to take."
                />

                <MapView>
                    <Map />
                </MapView>

                <DepartureItemsHolder>
                    {this.props.store.departures.map((departure,index) => <DepartureItem key={index}>
                        <DepartureIndex>
                            <DepartureIndexText>{index+1}</DepartureIndexText>
                        </DepartureIndex>
                        <DepartureInfo>
                            <DepartureItemText>{departure.name}</DepartureItemText>
                            <DepartureItemDesc>{(new Date(departure.departureTime).toLocaleString('en-AU', { hour12: true }))}</DepartureItemDesc>
                        </DepartureInfo>
                        <DepartureIndex>
                            <DepartureIndexText>></DepartureIndexText>
                        </DepartureIndex>
                    </DepartureItem>)}
                </DepartureItemsHolder>
            </>
        )
    }
}

// A component that was used more than 2 times, therefore made to be independent for future calls.
const SectionTitle =({ title, desc })=>
    <Section>
        <Title>
            {title}
        </Title>
        <Desc>
            {desc}
        </Desc>
    </Section>


export default Home