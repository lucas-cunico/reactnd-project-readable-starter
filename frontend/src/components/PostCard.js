import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as postActions from '../actions/post';
import VoteScore from './VoteScore';

class PostCard extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    onDelete(id){
        this.props.deletePost(id);
    }

    render() {
        const {post} = this.props;
        const {title, author, category, commentCount, id} = post;
        return <div className="col-sm-12 padding-card">
            <div className="card">
                <div className="card-body row">
                    <div className="col-md-1">
                        <VoteScore post={post}/>
                    </div>
                    <div className="col-md-11">
                        <div className="col-md-12">
                            <h5 className="card-title"><Link to={`/${category}/${id}`}>{title}</Link></h5>
                        <p className="card-text">
                            <small className="text-muted">{author} in <small className="text-primary">{category}</small></small>
                        </p>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                            <span className="badge badge-light">comments {commentCount}</span>
                            <button style={{float: 'right'}} className="btn badge-light fa fa-ellipsis-v" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="" data-toggle="tooltip" title="Edit post">Edit</a>
                                <span onClick={this.onDelete.bind(this, id)} className="dropdown-item" href="" data-toggle="tooltip" title="Delete post" style={{cursor: 'pointer'}}>Delete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

function mapDispatch(dispatch) {
    return {
        deletePost: (id) => dispatch(postActions.deletePost(id))
    }
}

export default connect(null, mapDispatch)(PostCard);