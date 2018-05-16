import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as commentActions from '../actions/comment';
import CommentVoteScore from './CommentVoteScore';
import ModalComment from './ModalComment'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    };

    componentDidMount() {
        // this.props.findAllByPost(this.props.postId);
    }

    onDelete(id){
        this.props.onDelete(id);
    }

    render() {
        const {comment} = this.props;
        const {author, body, id, parentId} = comment;
        return <React.Fragment>
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-body row">
                        <div className="col-md-12">
                            <button style={{float: 'right'}} className="btn badge-light fa fa-ellipsis-v" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <span className="dropdown-item"
                                      style={{cursor: 'pointer'}} data-toggle="modal"
                                      data-target={`#${id}`}>Edit</span>
                                <span onClick={this.onDelete.bind(this, id)} className="dropdown-item" data-toggle="tooltip" title="Delete" style={{cursor: 'pointer'}}>Delete</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-1">
                            <CommentVoteScore comment={comment}/>
                        </div>
                        <div className="col-md-11">
                            <div className="col-md-12">
                                <p className="card-text">
                                    <small className="text-muted">{author}</small>
                                </p>
                                <p className="card-text">
                                    {body}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComment comment={comment} postId={parentId} id={id}/>
        </React.Fragment>
    }
}

function mapDispatch(dispatch) {
    return {
        findAllByPost: (id) => dispatch(commentActions.findAllByPost(id)),
        onDelete: (id) => dispatch(commentActions.deleteComment(id))
    }
}

export default connect(null, mapDispatch)(Comment);