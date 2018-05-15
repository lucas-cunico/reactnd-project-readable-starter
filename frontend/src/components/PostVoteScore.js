import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as postActions from '../actions/post';
import VoteScore from './VoteScore';

class PostVoteScore extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    upVote(id) {
        this.props.upOrDownVote('upVote', id);
    }

    downVote(id) {
        this.props.upOrDownVote('downVote', id);
    }

    render() {
        const {voteScore, id} = this.props.post;
        return <VoteScore voteScore={voteScore} id={id} upVote={this.upVote.bind(this)} downVote={this.downVote.bind(this)}/>
    }
}

function mapDispatch(dispatch) {
    return {
        upOrDownVote: (ouOrDown, id) => dispatch(postActions.upOrDownVote(ouOrDown, id))
    }
}

export default connect(null, mapDispatch)(PostVoteScore);