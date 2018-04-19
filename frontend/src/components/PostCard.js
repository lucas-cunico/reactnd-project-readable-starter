import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PostCard extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    render() {
        const {title, author, category, body, voteScore} = this.props.post;
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
                    <button type="button" className="btn btn-primary">
                        Vote score <span className="badge badge-light">{voteScore}</span>
                    </button>
                </div>
            </div>
        </div>
    }
}
