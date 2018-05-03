import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class CategoryCard extends Component {
    static propTypes = {
        category: PropTypes.object.isRequired
    };
    render() {
        const {name} = this.props.category;
        return <Link to={`/${name}`} className="col-sm-3 padding-card" onClick={() => this.props.onClick(name)}>
            <div className="card pointer px-2">
                <div className="card-body">
                    <h5 className="card-title text-uppercase">{name}</h5>
                </div>
            </div>
        </Link>
    }
}
