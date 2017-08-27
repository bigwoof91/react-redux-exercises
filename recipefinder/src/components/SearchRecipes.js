import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    search() {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        fetch(url, {
            method: 'GET',
            header: ''
        })
        .then(response => response.json())
        .then(json => {
            this.props.setRecipes(json.results)
        });
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl
                        type="text"
                        placeholder="garlic, chicken"
                        name="ingredients"
                        value={this.state.ingredients}
                        onChange={this.handleInputChange} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                    <FormControl
                        type="Text"
                        name="dish"
                        placeholder="adobo"
                        value={this.state.dish}
                        onChange={this.handleInputChange} />
                </FormGroup>
                {' '}
                <Button onClick={this.search()}>Submit</Button>

            </Form>
        )
    }
}

export default connect(null, { setRecipes })( SearchRecipes);