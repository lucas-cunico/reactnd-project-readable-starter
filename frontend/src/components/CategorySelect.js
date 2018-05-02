import React, {Component} from 'react';
import {connect} from 'react-redux';

class CategorySelect extends Component {
    render() {
        const {categories, name, id} = this.props;
        return <select className="form-control" id={id} name={name}>
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
