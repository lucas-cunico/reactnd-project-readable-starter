import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as postActions from '../actions/post';

class PostCard extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    state = {
        voteScore: 0
    };

    upVote(id) {
        this.props.upOrDownVote('upVote', id);
        this.setState({voteScore: this.state.voteScore + 1});
    }

    downVote(id) {
        this.props.upOrDownVote('downVote', id);
        this.setState({voteScore: this.state.voteScore - 1});
    }


    componentDidMount() {
        this.setState({voteScore: this.props.post.voteScore});

    }
    onDelete(id){
        console.log(id);
        this.props.deletePost(id);
    }

    render() {
        const {title, author, category, commentCount, id} = this.props.post;
        return <div className="col-sm-12 padding-card">
            <div className="card">
                <div className="card-body row">
                    <div className="col-md-1">
                        <button onClick={this.upVote.bind(this, id)} type="button"
                                className="col-sm-12 btn btn-light fa fa-arrow-up"/>
                        <span className="col-sm-12 badge badge-light">{this.state.voteScore}</span>
                        <button onClick={this.downVote.bind(this, id)} type="button"
                                className="col-sm-12 btn btn-light fa fa-arrow-down"/>


                    </div>
                    <div className="col-md-11">
                        <div className="col-md-12">
                        <h5 className="card-title">{title}</h5>
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
        upOrDownVote: (ouOrDown, id) => dispatch(postActions.upOrDownVote(ouOrDown, id)),
        deletePost: (id) => dispatch(postActions.deletePost(id))
    }
}

export default connect(null, mapDispatch)(PostCard);