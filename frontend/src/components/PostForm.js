import React, {Component} from 'react';
import CategorySelect from './CategorySelect';

export default class PostForm extends Component {

    render() {
        const {post} = this.props;
        return <div className="col-sm-12 padding-card">
            <form onSubmit={this.props.onSubmit.bind(this)}>
                <div className="modal-body">
                    <input type="hidden" name="id" defaultValue={post ? post.id : null} />
                    <input type="hidden" name="timestamp" defaultValue={post ? post.timestamp : null} />
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title"
                               aria-describedby="title" placeholder="Title" defaultValue={post ? post.title : ""} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <input type="body" className="form-control" name="body"
                               aria-describedby="body" placeholder="Body" defaultValue={post ? post.body : ""} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="author" className="form-control" name="author"
                               aria-describedby="author" placeholder="Author" defaultValue={post ? post.author : ""} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <CategorySelect name='category' defaultValue={post ? post.category : ""}/>
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