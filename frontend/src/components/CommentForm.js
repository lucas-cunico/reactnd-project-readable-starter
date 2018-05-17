import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends Component {
    static propTypes = {
        postId: PropTypes.string.isRequired,
        comment: PropTypes.object,
        onSubmit: PropTypes.func.isRequired
    };

    state = {
        comment: {
            id: null,
            timestamp: null,
            body: '',
            author: '',
            parentId: '',
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({comment: nextProps.comment});
    }
    componentDidMount() {
        let {comment} = this.props;
        if(comment !== undefined && this.state.comment !== comment ){
            this.setState({comment});
        }
    }

    render() {
        const {comment} = this.state;
        return <div className="col-sm-12 padding-card">
            <form onSubmit={this.props.onSubmit.bind(this)}>
                <div className="modal-body">
                    {comment.id ? <input type="hidden" name="id" value={comment.id}/> : null}
                    {comment.timestamp ? <input type="hidden" name="timestamp" value={comment.timestamp}/> : null }
                    <input type="hidden" name="parentId" value={this.props.postId}/>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <input type="text" className="form-control" name="body"
                               aria-describedby="body" placeholder="Body"
                               value={comment.body}
                               onChange={e => {
                                   let commentClone = {...comment};
                                   commentClone.body = e.target.value;
                                   this.setState({comment: commentClone});
                               }}
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" name="author"
                               aria-describedby="author" placeholder="Author"
                               value={comment.author}
                               onChange={e => {
                                   let commentClone = {...comment};
                                   commentClone.author = e.target.value;
                                   this.setState({comment: commentClone})
                               }}
                               required/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
    }
}