import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findAll} from '../actions/category';
import * as postActions from '../actions/post';
import CategoryCard from './CategoryCard';
import PostCard from './PostCard';
import PostForm from './PostForm';

class Home extends Component {
    componentDidMount() {
        this.props.findAllCategories();
        const {category} = this.props.match.params;
        if(category){
            this.props.findAllByCategory(category);
        }else{
            this.props.findAllPosts();
        }
    }
    onClickCategory(e){
        this.props.findAllByCategory(e);
    }
    render() {
        const {categories, posts} = this.props;
        return <div className="">
            <nav className="navbar navbar-light bg-light">
            </nav>
            <div className="container">
                <div className="row">
                    {categories.map((category) => {
                        return <CategoryCard category={category} key={category.name} onClick={this.onClickCategory.bind(this)}/>
                    })}
                </div>
                <div className="row">
                    <PostForm/>
                </div>
                <div className="row">
                {posts.sort((a , b) => a.timestamp < b.timestamp ).map((post) => {
                    return <PostCard post={post} key={post.id}/>
                })}
                </div>
            </div>
        </div>
    }
}

function mapState(state) {
    const {categories} = state.category;
    const {posts} = state.post;
    return {
        categories,
        posts
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