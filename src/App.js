import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';


class App extends Component {

    
constructor(props) {
    super(props);
    this.state = {
        data: []
    };
}

componentDidMount() {
    axios.get(`/api/data`).then((res) => {
            this.setState({ 
                data: res.data
            });
        })
    }
  render() {
    return (
        <div className="chart-container">
        <h1>Test</h1>
        
        {this.state.load}
            <LineChart width={1200} height={600} data={this.state.data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="time"/>
                <YAxis/>
                <CartesianGrid />
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="wa" stroke="#8884d8" activeDot={{r: 9}}/>
                <Line type="monotone" dataKey="we" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
  }
}

export default App;
