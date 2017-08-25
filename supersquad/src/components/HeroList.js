import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeHeroById } from '../actions';
import '../App.css'

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Hero Squad</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return (
                                <div className="slideup" key={hero.id}>
                                    <li className="list-group-item">
                                        <div className="list-item">{hero.name}</div>

                                        <span className="add-hero list-item" onClick={() => this.props.removeHeroById(hero.id)}>
                                            -
                                    </span>

                                    </li>
                                </div>
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
        heroes: state.heroes
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({ addCharacterById }, dispatch)

// }

export default connect(mapStateToProps, { removeHeroById })(HeroList);