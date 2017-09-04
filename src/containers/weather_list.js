import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component{
    constructor(props){
        super(props);
    }

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather =>weather.main.temp);
        const press = cityData.list.map(weather =>weather.main.pressure);
        const humid = cityData.list.map(weather =>weather.main.humidity);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        return(
            <tr key={name}>
                <td> <GoogleMap lon={lon} lat={lat} /> </td>
                <td> <Chart data={temps} units={"Kelvin"} color="red"/>  </td>
                <td> < Chart data={press} units ={"hPa"}color="green"/>  </td>
                <td> <Chart data={humid} units={"%"} color="blue"/> </td>

            </tr>
        );
    }




    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>

                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>

            </table>
        )

    }

}
function mapStateToProps({weather}) {
    return{weather};// JS6 syntax, This is eq to {weather: state.weather}

}

export default connect(mapStateToProps)(WeatherList);