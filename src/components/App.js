import React, { Component } from 'react';
import '../App.css';
import Input from './input.js';

class App extends Component {
  state = {
    location: "",
    thumbnail:'',
    title: '',
    description: '',
    temp: 0
  }
getWeather = () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`;
    let promiseResponse = fetch(url).then(response => response.json());
    return promiseResponse.then(result =>{ 
      this.setState({
        title: result.name,
        thumbnail: result.weather[0].icon,
        description: result.weather[0].description,
        temp: Math.floor(result.main.temp)
      })
    });
  }
  
  handleLocationUpdate = (e) => {
    e.preventDefault();
    let loc = e.target[0].value;
    if(loc.length > 0) {
    this.setState({location: loc})
    setTimeout(this.getWeather,1);
      e.target[0].value = '';
    }

  }

  render() {
    return (
      <div className="App">
        <h1 className="text-primary"> Weather App </h1>
        <Input updateLocation={this.handleLocationUpdate}/>
        {this.state.title.length > 0 && <h3>{this.state.title}</h3>}
        {this.state.title.length > 0 && <h5 className="p-3">{this.state.description}</h5>}
        {this.state.title.length > 0 && <h5 className="p-3">{this.state.temp}&#8457;</h5>}
        {this.state.thumbnail.length > 0 && <img width="100px" src={`http://openweathermap.org/img/w/${this.state.thumbnail}.png`} alt="thumbnail"/>}
        
        <footer>Made with &#10084; by <a className="text-primary" href="http://joseluisdev.com">JLuis</a></footer>
      </div>
    );
  }
}

export default App;
