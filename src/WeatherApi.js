import React, { Component } from "react";
import axios from 'axios';

export class WeatherApi extends Component {
    constructor(props){
        super(props)
        this.state = {
            weather: '',
            city:['kansas+city','atlanta','new+york','new+orleans'],
            currentCity: 'atlanta'
        }
    }

    async componentDidMount(){
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&APPID=2f4580c1da2a1471787ee4c356181fd1`)
        this.setState({
            weather:response
        })
    }

    _changeIt = (currentCity)=>{
        this.setState({
            currentCity
        },this._setCity)
    }

    _setCity = async()=>{
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&APPID=2f4580c1da2a1471787ee4c356181fd1`)
        this.setState({
            weather:response
        })
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

            <div className="dropdown">
                <button 
                className="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton" data-toggle="dropdown" 
                aria-haspopup="true"
                aria-expanded="false">
                    Choose a City!
                </button>
                
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.state.city.map((eaCity, i)=>(
                    
                    <button 
                    className="dropdown-item" 
                    key={i} 
                    value={eaCity}
                    onClick={(e)=>{
                        this._changeIt(e.target.value)
                    }} 
                    >
                    {eaCity.replace('+', ' ')}
                    </button>
                )

                )}

                </div>

                
            </div>
        



        </div>
        )
    }
}

export default WeatherApi;