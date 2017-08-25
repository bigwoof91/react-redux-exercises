import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions';
import '../App.css'

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Heros</h4>
                <ul className="list-group">
                    {
                        this.props.heros.map(character => {
                            return (
                                <li className="list-group-item" key={hero.id}>
                                    <div className="list-item">{hero.name}</div>
                                    
                                    <span className="add-hero list-item" onClick={() => this.props.addCharacterById(hero.id)}>
                                        +
                                    </span>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        heros: state.heros
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({ addCharacterById }, dispatch)

// }

export default connect(mapStateToProps, { addCharacterById })(HeroList);