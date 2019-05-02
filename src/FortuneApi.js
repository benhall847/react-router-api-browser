import React, { Component } from 'react'
import axios from 'axios'
import Button from './Button';


export class FortuneApi extends Component {
    constructor(props){
        super(props)
            this.state = {
                fortune:''
            }
    }

    async componentDidMount(){
        const response = await axios.get('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
        this.setState({
            fortune:response.data.fortune
        })
        
    }

    _setFortune = async () =>{
        const response = await  axios.get('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
        this.setState({
            fortune:response.data.fortune
        })
    }


    render() {
        return (
        <div>
            <div>
            {this.state.fortune ?  this.state.fortune : null}
            </div>
            <Button clickHandler={this._setFortune}></Button>
        </div>
        )
    }
}

export default FortuneApi
