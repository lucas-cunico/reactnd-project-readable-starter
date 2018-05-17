import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as commentActions from '../actions/comment';
import Comment from './Comment';

class Comments extends Component {
    static propTypes = {
        postId: PropTypes.string.isRequired
    };

    componentDidMount() {
        this.props.findAllByPost(this.props.postId);
    }

    render() {
        const {comments} = this.props;
        return <React.Fragment>
            <div className="col-sm-12">
                {comments.length > 0 ? <h5>{comments.length} Comments</h5> : null}
            </div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </React.Fragment>
    }
}

function mapState(state) {
    //{comment} "hack" used to comparassion
    const {comments, comment} = state.comment;
    return {
        comments,
        comment
    }
}
function mapDispatch(dispatch) {
    return {
        findAllByPost: (id) => dispatch(commentActions.findAllByPost(id))
    }
}

export default connect(mapState, mapDispatch)(Comments);