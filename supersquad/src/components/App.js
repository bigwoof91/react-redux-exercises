import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../App.css';

class App extends Component {
    render() {
        console.log("heroes", this.props.heroes[0])
        return (
            <div className="app">
                <h2>SuperSquad</h2>
                <CharacterList />

                { this.props.heroes[0] === undefined
                    ? null
                    : <HeroList /> 
                }
                <SquadStats />
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        heroes: state.heroes
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({ addCharacterById }, dispatch)

// }

export default connect(mapStateToProps, null)(App);