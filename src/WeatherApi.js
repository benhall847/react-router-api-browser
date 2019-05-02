import React, { Component } from "react";
import axios from 'axios';

export class WeatherApi extends Component {
    constructor(props){
        super(props)
        this.state = {
            weather: ''
        }
    }

    async componentDidMount(){
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=2f4580c1da2a1471787ee4c356181fd1')
        this.setState({
            weather:response
        }, console.log(response))
    }

    render() {
        const {weather} = this.state
        return (
        <div>
            {weather ? 
            
            <div>
                <div>
                    {weather.data.name}
                </div> 

                <div>
                    {weather.data.weather[0].description}
                </div>

                <div>
                    wind speed : {weather.data.wind.speed}
                </div>


            </div>

            
        
            : null}





        </div>
        )
    }
}

export default WeatherApi;