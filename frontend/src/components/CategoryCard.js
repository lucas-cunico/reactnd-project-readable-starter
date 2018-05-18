import React from 'react';
import {Link} from 'react-router-dom';

const CategoryCard = ({category, ...rest}) => {
    const {name} = category;
    return <Link to={`/${name}`} className="col-sm-3 padding-card" {...rest}>
        <div className="card pointer px-2">
            <div className="card-body">
                <h5 className="card-title text-uppercase">{name}</h5>
            </div>
        </div>
    </Link>
};
export default CategoryCard;