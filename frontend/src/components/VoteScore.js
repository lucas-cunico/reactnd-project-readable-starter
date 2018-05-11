import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as postActions from '../actions/post';

class VoteScore extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    state = {
        voteScore: 0
    };

    upVote(id) {
        this.props.upOrDownVote('upVote', id);
        this.setState({voteScore: this.state.voteScore + 1});
    }

    downVote(id) {
        this.props.upOrDownVote('downVote', id);
        this.setState({voteScore: this.state.voteScore - 1});
    }


    componentDidMount() {
        console.log(this.props.post);
        this.setState({voteScore: this.props.post.voteScore});

    }

    render() {
        const {id} = this.props.post;
        return <React.Fragment>
            <button onClick={this.upVote.bind(this, id)} type="button"
                    className="col-sm-12 btn btn-light fa fa-arrow-up"/>
            <span className="col-sm-12 badge badge-light">{this.state.voteScore}</span>
            <button onClick={this.downVote.bind(this, id)} type="button"
                    className="col-sm-12 btn btn-light fa fa-arrow-down"/>
        </React.Fragment>
    }
}

function mapDispatch(dispatch) {
    return {
        upOrDownVote: (ouOrDown, id) => dispatch(postActions.upOrDownVote(ouOrDown, id))
    }
}

export default connect(null, mapDispatch)(VoteScore);