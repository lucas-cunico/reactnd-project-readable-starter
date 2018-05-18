import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findAll} from '../actions/category';
import * as postActions from '../actions/post';
import CategoryCard from './CategoryCard';
import PostCard from './PostCard';
import ModalPost from './ModalPost';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {
        orderBy: "date",
        category: ""
    };

    componentDidMount() {
        this.props.findAllCategories();
        this.props.findAllPosts();

        const {category} = this.props.match.params;
        this.setState({category: category ? category : ""});
    }

    changeOrder(e) {
        this.setState({orderBy: e});
    }

    render() {
        const {categories, posts} = this.props;
        return <div className="col-sm-12 padding-card">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"
                                                          onClick={() => this.setState({category: ""})}>Home</Link></li>
                </ol>
            </nav>
            <div className="container">
                <div className="row">
                    {categories.map((category) => {
                        return <CategoryCard category={category} key={category.name}
                                             onClick={() => this.setState({category: category.name})}/>
                    })}
                </div>
                <div className="row padding-card">
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-primary btn-lg btn-bottom-align" data-toggle="modal"
                                data-target="#post">
                            New Post
                        </button>
                        <ModalPost id="post"/>
                    </div>
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3">
                        <label>Order by:</label>
                        <select onClick={(e) => this.changeOrder(e.target.value)} className="form-control">
                            <option value="date">Date</option>
                            <option value="score">Score</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {posts.filter((post) => this.state.category === "" || post.category === this.state.category).sort((a, b) => {
                        if (this.state.orderBy === "date") {
                            return a.timestamp < b.timestamp
                        }
                        return a.voteScore < b.voteScore
                    }).map((post) => {
                        return <PostCard post={post} key={post.id}/>
                    })}
                </div>
            </div>
        </div>
    }
}

function mapState(state) {
    const {categories} = state.category;
    const {posts, post} = state.post;
    return {
        categories,
        posts,
        post
    }
}

function mapDispatch(dispatch) {
    return {
        findAllCategories: () => dispatch(findAll()),
        findAllPosts: () => dispatch(postActions.findAll()),
        findAllByCategory: (categoryName) => dispatch(postActions.findAllByCategory(categoryName))
    }
}

export default connect(mapState, mapDispatch)(Home);