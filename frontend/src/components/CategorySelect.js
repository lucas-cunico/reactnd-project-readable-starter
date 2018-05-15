import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CategorySelect extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        defaultValue: PropTypes.string
    };

    render() {
        const {categories, name, defaultValue} = this.props;
        return <select className="form-control" name={name} defaultValue={defaultValue}>
            {categories.map((category, index) => {
                return <option key={index}>{category.name}</option>
            })}
        </select>
    }
}

function mapState(state) {
    const {categories} = state.category;
    return {
        categories
    }
}

export default connect(mapState)(CategorySelect);
