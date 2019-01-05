import React,{Component} from 'react';



class CurrentWeather extends Component {

  state = {
    location: "",
    thumbnail:'',
    title: '',
    description: '',
    temp: 0,
  }

  componentDidMount = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`;
    const response = await fetch(url);
    const result = await response.json();

      this.setState({
        title: result.name,
        thumbnail: result.weather[0].icon,
        description: result.weather[0].description,
        temp: Math.floor(result.main.temp)
      })
  }

render() {
    const {temp,title,thumbnail,description} = this.state;
    return (<div className="jumbotron  text-center" style={{height: '95vh'}}>
    <h2 className="display-4 mt-3">Current Weather</h2>
    <div className="container">
    <div className="card p-3">
    <p className="lead font-weight-bold">{title}</p>
    <div className="m-3">
  <img style={{width: 80}} src={`http://openweathermap.org/img/w/${thumbnail}.png`} className="mx-auto card-img-top" alt={description}/>
  </div>
  <div className="card-body ">
    <p className="card-text">
      <span className="font-weight-bold">{temp}°F</span>
    <br/>{description}</p>
  </div>
</div>
</div>
  </div>
    )
  }
}

export default CurrentWeather;
