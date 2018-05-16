import React, {Component} from 'react';
import CategorySelect from './CategorySelect';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
    static propTypes = {
        post: PropTypes.object,
        onSubmit: PropTypes.func.isRequired
    };

    state = {
        post: {
            id: null,
            timestamp: null,
            title: '',
            body: '',
            author: '',
            category: '',
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({post: nextProps.post});
    }
    componentDidMount() {
        let {post} = this.props;
        if(post != null && this.state.post != post ){
            this.setState({post});
        }
    }

    render() {
        const {post} = this.state;
        return <div className="col-sm-12 padding-card">
            <form onSubmit={this.props.onSubmit.bind(this)}>
                <div className="modal-body">
                    {post.id ? <input type="hidden" name="id" value={post.id}/> : null}
                    {post.timestamp ? <input type="hidden" name="timestamp" value={post.timestamp}/> : null }
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title"
                               aria-describedby="title" placeholder="Title"
                               value={post.title}
                               onChange={e => {
                                   let postClone = {...post};
                                   postClone.title = e.target.value;
                                   this.setState({post: postClone});
                               }}
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <input type="text" className="form-control" name="body"
                               aria-describedby="body" placeholder="Body"
                               value={post.body}
                               onChange={e => {
                                   let postClone = {...post};
                                   postClone.body = e.target.value;
                                   this.setState({post: postClone});
                               }}
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" name="author"
                               aria-describedby="author" placeholder="Author"
                               value={post.author}
                               onChange={e => {
                                   let postClone = {...post};
                                   postClone.author = e.target.value;
                                   this.setState({post: postClone})
                               }}
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <CategorySelect name='category'
                                        value={post.category}
                                        onChange={e => {
                                            let postClone = {...post};
                                            postClone.category = e.target.value;
                                            this.setState({post: postClone})
                                        }}
                        />
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