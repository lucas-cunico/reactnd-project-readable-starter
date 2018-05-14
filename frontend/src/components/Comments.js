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
                <h5>Comments</h5>
            </div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </React.Fragment>
    }
}

function mapState(state) {
    return {
        comments: state.comment.comments
    }
}
function mapDispatch(dispatch) {
    return {
        findAllByPost: (id) => dispatch(commentActions.findAllByPost(id))
    }
}

export default connect(mapState, mapDispatch)(Comments);