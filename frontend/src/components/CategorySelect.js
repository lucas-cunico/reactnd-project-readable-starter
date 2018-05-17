import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../actions/category';

class CategorySelect extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.findAllCategories();
    }

    render() {
        const {categories, name, value, onChange} = this.props;
        return <select className="form-control" name={name} value={value} onChange={onChange}>
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

function mapDispatch(dispatch) {
    return {
        findAllCategories: () => dispatch(categoryActions.findAll())
    }
}

export default connect(mapState, mapDispatch)(CategorySelect);
