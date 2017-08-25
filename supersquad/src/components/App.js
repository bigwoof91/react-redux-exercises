import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h2>SuperSquad</h2>
                <CharacterList />
            </div>

        )
    }
}

export default App;