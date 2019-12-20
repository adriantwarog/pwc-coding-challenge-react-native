import styled from 'styled-components/native'

// Reusable components based on the theme are set.

export const DepartureItemsHolder = styled.View`
    padding:8px;
    padding-top:0;
`

export const DepartureInfo = styled.View`
    flex:1;
`

export const DepartureIndexText = styled.Text`
    font-size:26px;
    line-height:26px;
    opacity:0.25;
`

export const DepartureIndex = styled.View`
    display:flex;
    padding:8px;
    margin-right:8px;
    align-items:center;
    justify-content:center;
`

export const DepartureItemDesc = styled.Text`
    font-size:13px;
    opacity:0.75;
`

export const DepartureItemText = styled.Text`
    font-size:18px;
    font-weight:400;
`

export const DepartureItem = styled.View`
    border-radius:8px;
    border-bottom-width:1px;
    border-bottom-color:#e1e1e1;
    padding:8px;
    position:relative;
    overflow:hidden;
    flex-direction:row;
`

export const Title = styled.Text`
    font-size:26px;
    font-weight:300;
`

export const Desc = styled.Text`
    font-size:14px;
    opacity:0.75;
    font-weight:300;
`

export const Section = styled.View`
    padding:8px;
`

export const DepartureOptionTitle = styled.Text`
    font-size:22px;
    font-weight:500;
    line-height:22px;
    color:#d85604;
`
export const DepartureOptionDesc = styled.Text`
    font-size:13px;
    line-height:13px;
    opacity:0.75;
`

export const DepartureOptions = styled.View`
    padding:4px;
    flex-direction:row;
`

export const MapView = styled.View`
    height:192px;
    position:relative;
    margin:8px;
    border-radius:8px;
    overflow:hidden;
`

export const DepartureButton = styled.TouchableOpacity`
    height:128px;
    flex:1;
    margin:4px;
    padding:8px;
    background:#fff9e9;
    border-radius:8px;
    justify-content:flex-end;
    position:relative;
    overflow:hidden;
`

export const TravelButton = styled.TouchableOpacity`
    height:72px;
    flex:1;
    margin:4px;
    padding:8px;
    background:${props => props.active ? "#d85604" : "#ffeeeb"};
    border-radius:8px;
    justify-content:flex-end;
    position:relative;
    overflow:hidden;
    
`
export const TravelOptionTitle = styled.Text`
    font-size:22px;
    font-weight:500;
    line-height:22px;
    color:${props => props.active ? "#fff" : "#d85604"};
`


export const DepartureImage = styled.ImageBackground`
    position:absolute;
    top:-25%;bottom:25%;
    right:-25%;left:12.5%;
`

export default DepartureItemsHolder;