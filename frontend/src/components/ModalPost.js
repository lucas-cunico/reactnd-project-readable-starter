import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as postActions from '../actions/post';
import PostForm from './PostForm';
import serializeForm from 'form-serialize';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

class ModalPost extends Component {
    onSubmit(e) {
        e.preventDefault();
        const post = serializeForm(e.target, {hash: true});
        const mod = findDOMNode(this.refs.modalPost);
        this.props.saveOrUpdate(post);
        $(mod).modal('hide');
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-bottom-align" data-toggle="modal"
                        data-target="#post">
                    New Post
                </button>
                <div className="modal fade" id="post" ref="modalPost" role="dialog" aria-labelledby="postModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="postModalLabel">New post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <PostForm onSubmit={this.onSubmit.bind(this)}/>
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