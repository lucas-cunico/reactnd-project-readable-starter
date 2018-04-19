import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
    state = {
        visible: 'd-none'
    };

    changeVisibility() {
        const {visible} = this.state;
        if (visible === 'd-none') {
            this.setState({visible: 'd-block'})
        } else {
            this.setState({visible: 'd-none'})
        }
    }

    render() {
        return <div className="col-sm-12 padding-card">
            <div className="card">
                <div className="card-header pointer d-transition" onClick={this.changeVisibility.bind(this)}>
                    Post
                </div>
                <div className={`card-body ${this.state.visible}`}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    }
}
