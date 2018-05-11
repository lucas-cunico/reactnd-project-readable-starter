import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as postActions from '../actions/post';
import PostForm from './PostForm';

class ModalPost extends Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-bottom-align" data-toggle="modal" data-target="#post">
                    New Post
                </button>
                <div className="modal fade" id="post" role="dialog" aria-labelledby="postModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="postModalLabel">New post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                                <PostForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatch(dispatch) {
    return {
        saveOrUpdate: (post) => dispatch(postActions.saveOrUpdate(post))
    }
}

export default connect(null, mapDispatch)(ModalPost);
