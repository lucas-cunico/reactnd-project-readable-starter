import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as postActions from '../actions/post';
import PostVoteScore from './PostVoteScore';
import Comments from './Comments';
import ModalPost from './ModalPost';
import ModalComment from './ModalComment';
import NotFound from './../components/NotFound';
import CategoryCard from './CategoryCard';

class DetailsPost extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.find(id);
    }

    onDelete(id) {
        this.props.deletePost(id, this.props.history);
    }

    render() {
        const {post, categories} = this.props;
        const postId = this.props.match.params.id;

        if(Object.keys(post).length === 0){
            return <NotFound/>
        }
        const {title, author, category, body, id} = post;
        return <React.Fragment>
            <div className="col-sm-12 padding-card">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    </ol>
                </nav>
                <div className="container">
                    <div className="row">
                        {categories.map((category) => {
                            return <CategoryCard category={category} key={category.name} />
                        })}
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-body row">
                        <div className="col-md-12">
                            <button style={{float: 'right'}} className="btn badge-light fa fa-ellipsis-v" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <span className="dropdown-item"
                                  style={{cursor: 'pointer'}} data-toggle="modal"
                                  data-target={`#${id}`}>Edit</span>
                                <span onClick={this.onDelete.bind(this, id)} className="dropdown-item" href=""
                                      data-toggle="tooltip" title="Delete post"
                                      style={{cursor: 'pointer'}}>Delete</span>

                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-1">
                            <PostVoteScore post={post}/>
                        </div>
                        <div className="col-md-11">
                            <div className="col-md-12">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">
                                    <small className="text-muted">{author} in
                                        <small className="text-primary"> {category}</small>
                                    </small>
                                </p>
                                <p className="card-text">
                                    {body}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <hr/>
                            <Comments postId={postId}/>
                            <div className="col-sm-12">
                                <br/>
                                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal"
                                        data-target="#comment">
                                    New Comment
                                </button>
                                <ModalComment id="comment" postId={postId}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalPost id={id} post={post}/>
        </React.Fragment>
    }
}

function mapState(state) {
    const {post} = state.post;
    const {categories} = state.category;
    return {
        post,
        categories
    }
}

function mapDispatch(dispatch) {
    return {
        find: (id) => dispatch(postActions.find(id)),
        deletePost: (id, history) => dispatch(postActions.deletePost(id, history))
    }
}

export default connect(mapState, mapDispatch)(DetailsPost);