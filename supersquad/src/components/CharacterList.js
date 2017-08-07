import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
    render() {
        return (
            <div>
                <h4>Characters</h4>
            </div>
        )
    }
}

export default connect()(CharacterList);