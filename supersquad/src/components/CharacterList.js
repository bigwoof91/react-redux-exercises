import React, { Component } from 'react';
import { connect } from 'react-redux';
// You can use this, but by passing addCharacterById as an object (as an argument) into connect
// import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';
import '../App.css'

class CharacterList extends Component {
    render() {
        // console.log('this.props ', this.props);
        return (
            <div className="col-md-6">
                <h4>Characters</h4>
                <ul className="list-group">
                    {
                        this.props.characters.map(character => {
                            return (
                                <li className="list-group-item" key={character.id}>
                                    <div className="list-item">{character.name}</div>
                                    
                                    <span className="add-hero list-item" onClick={() => this.props.addCharacterById(character.id)}>
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
        characters: state.characters
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({ addCharacterById }, dispatch)

// }

export default connect(mapStateToProps, { addCharacterById })(CharacterList);