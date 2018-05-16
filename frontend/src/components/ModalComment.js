import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as commentActions from '../actions/comment';
import CommentForm from './CommentForm';
import serializeForm from 'form-serialize';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';

class ModalComment extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        postId: PropTypes.string.isRequired,
        comment: PropTypes.object
    };

    onSubmit(e) {
        e.preventDefault();
        const comment = serializeForm(e.target, {hash: true});
        const mod = findDOMNode(this.refs.modalComment);
        this.props.saveOrUpdate(comment);
        $(mod).modal('hide');
    }

    render() {
        const {id, comment, postId} = this.props;
        return <div className="modal fade" ref="modalComment" id={id} role="dialog" aria-labelledby="commentModalLabel"
                    aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="commentModalLabel">{comment != null ? "Edit comment":"New comment"}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <CommentForm comment={comment} postId={postId} onSubmit={this.onSubmit.bind(this)}/>
                </div>
            </div>
        </div>
    }
}

function mapDispatch(dispatch) {
    return {
        saveOrUpdate: (comment) => dispatch(commentActions.saveOrUpdate(comment))
    }
}

export default connect(null, mapDispatch)(ModalComment);