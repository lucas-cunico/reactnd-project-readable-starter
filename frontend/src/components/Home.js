import React, { Component } from 'react';
import {connect} from 'react-redux';
import {findAll} from '../actions/categorie';

class Home extends Component {
    componentDidMount(){
        this.props.findAllCategories();
    }
    render() {
        const {categories} = this.props;
        console.log(categories);
        return <React.Fragment>
            {categories.map(categorie => categorie.name)}
        </React.Fragment>
    }
}

function mapState(state) {
    const {categories} = state.categorie;
    return {
        categories
    }
}

function mapDispatch (dispatch) {
    return {
        findAllCategories: () => dispatch(findAll())
    }
}
export default connect(mapState, mapDispatch)(Home);