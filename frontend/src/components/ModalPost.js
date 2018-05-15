import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as postActions from '../actions/post';
import PostForm from './PostForm';
import serializeForm from 'form-serialize';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

class ModalPost extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        post: PropTypes.object
    };

    onSubmit(e) {
        e.preventDefault();
        const post = serializeForm(e.target, {hash: true});
        const mod = findDOMNode(this.refs.modalPost);
        this.props.saveOrUpdate(post);
        $(mod).modal('hide');
    }

    render() {
        const {id, post} = this.props;
        return <div className="modal fade" ref="modalPost" id={id} role="dialog" aria-labelledby="postModalLabel"
                    aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="postModalLabel">{post != null ? "Edit post":"New post"}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <PostForm post={post} onSubmit={this.onSubmit.bind(this)}/>
                </div>
            </div>
        </div>
    }
}

function mapDispatch(dispatch) {
    return {
        saveOrUpdate: (post) => dispatch(postActions.saveOrUpdate(post))
    }
}

export default connect(null, mapDispatch)(ModalPost);