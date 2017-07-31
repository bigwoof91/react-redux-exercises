import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats.js';

class App extends Component {
    constructor() {
        super();

        this.state = {
            newDate: '',
            birthday: '1991-09-13',
            showStats: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeBirthday = this.changeBirthday.bind(this);
    }
    handleChange(event) {
        this.setState({
            newDate: event.target.value
        })

    }
    changeBirthday() {
        this.setState({
            birthday: this.state.newDate,
            showStats: true
        })
        console.log("new birthday", this.state);
    }
    render() {
        return (
            <div className="App">
                <Form inline>
                    <h2>Input Your Birthday!</h2>
                    <FormControl
                        onChange={this.handleChange} type="date"
                    >
                    </FormControl>
                    {' '}
                    <Button onClick={this.changeBirthday}>
                        Submit
                    </Button>
                    {this.state.showStats ?
                        <div className="fade age-stats">
                            <AgeStats date={this.state.birthday} />
                        </div>
                        :
                        null}
                </Form>
            </div>
        )
    }
}

export default App;