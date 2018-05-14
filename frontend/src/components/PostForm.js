import React, {Component} from 'react';
import CategorySelect from './CategorySelect';

export default class PostForm extends Component {

    render() {
        return <div className="col-sm-12 padding-card">
            <form onSubmit={this.props.onSubmit.bind(this)}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" name="title"
                               aria-describedby="title" placeholder="Title" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <input type="body" className="form-control" id="body" name="body"
                               aria-describedby="body" placeholder="Body" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="author" className="form-control" id="author" name="author"
                               aria-describedby="author" placeholder="Author" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <CategorySelect id='category' name='category'/>
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