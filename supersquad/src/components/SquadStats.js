import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css'

class SquadStats extends Component {
    strength() {
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength);
        return strength;
    }
    speed() {
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed);
        return speed;
    }
    intelligence() {
        let intelligence = 0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence;
    }    
    render() {
        return (
            <div className="col-md-12">
                <h4>Squad Stats</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Overall Strength: {this.strength()}</b>
                    </li>
                    <li className="list-group-item">
                        <b>Overall Speed: {this.speed()}</b>
                    </li>
                    <li className="list-group-item">
                        <b>Overall Intelligence: {this.intelligence()}</b>
                    </li>
                </ul>
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

export default connect(mapStateToProps, null)(SquadStats);