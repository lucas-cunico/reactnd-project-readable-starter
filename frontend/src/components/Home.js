import React, { Component } from 'react';
import {connect} from 'react-redux';
import {findAll} from '../actions/categorie';

class Home extends Component {
    componentDidMount(){
        this.props.findAllCategories();
    }
    render() {
        return <React.Fragment>
            hello
        </React.Fragment>
    }
}

function mapState(state) {
    return {
        // desafioReducer: state.desafioReducer,
        // userInfo: state.userInfo
    }
}

function mapDispatch (dispatch) {
    return {
        findAllCategories: () => dispatch(findAll())
    }
}
export default connect(mapState, mapDispatch)(Home);