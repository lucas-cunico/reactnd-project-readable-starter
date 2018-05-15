import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class VoteScore extends Component {
    static propTypes = {
        voteScore: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        upVote: PropTypes.func.isRequired,
        downVote: PropTypes.func.isRequired
    };

    upVote(id) {
        this.props.upVote(id);
    }

    downVote(id) {
        this.props.downVote(id);
    }

    render() {
        const {id, voteScore} = this.props;
        return <React.Fragment>
            <button onClick={this.upVote.bind(this, id)} type="button"
                    className="col-sm-12 btn btn-light fa fa-arrow-up"/>
            <span className="col-sm-12 badge badge-light">{voteScore}</span>
            <button onClick={this.downVote.bind(this, id)} type="button"
                    className="col-sm-12 btn btn-light fa fa-arrow-down"/>
        </React.Fragment>
    }
}
