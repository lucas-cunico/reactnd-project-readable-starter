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
        this.setState({voteScore: this.state.voteScore+1});
    }

    downVote(id) {
        this.props.upOrDownVote('downVote', id);
        this.setState({voteScore: this.state.voteScore-1});
    }


    componentDidMount() {
        this.setState({voteScore: this.props.post.voteScore});

    }

    render() {
        const {title, author, category, body, id} = this.props.post;
        return <div className=" col-sm-12 padding-card">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">
                        <small className="text-muted">{author} in </small>
                        <small className="text-primary">{category}</small>
                    </p>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <hr/>
                    <div className="row">
                        <span className="">
                            Vote score: <span className="badge badge-pill badge-primary">{this.state.voteScore}</span>
                        </span>
                    </div>
                    <div className="row">
                        <button onClick={this.downVote.bind(this, id)} type="button"
                                className="border border-white btn btn-primary fa fa-thumbs-down"/>
                        <button onClick={this.upVote.bind(this, id)} type="button"
                                className="border border-white btn btn-primary fa fa-thumbs-up"/>
                    </div>
                </div>
            </div>
        </div>
    }
}

function mapDispatch(dispatch) {
    return {
        upOrDownVote: (ouOrDown, id) => dispatch(postActions.upOrDownVote(ouOrDown, id))
    }
}

export default connect(null, mapDispatch)(PostCard);