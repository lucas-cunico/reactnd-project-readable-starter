import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as commentActions from '../actions/comment';
import VoteScore from './VoteScore';

class CommentVoteScore extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    };

    upVote(id) {
        this.props.upOrDownVote('upVote', id);
    }

    downVote(id) {
        this.props.upOrDownVote('downVote', id);
    }

    render() {
        const {voteScore, id} = this.props.comment;
        return <VoteScore voteScore={voteScore} id={id} upVote={this.upVote.bind(this)} downVote={this.downVote.bind(this)}/>
    }
}

function mapDispatch(dispatch) {
    return {
        upOrDownVote: (ouOrDown, id) => dispatch(commentActions.upOrDownVote(ouOrDown, id))
    }
}

export default connect(null, mapDispatch)(CommentVoteScore);