import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TagHeader = ({ image, alt, url }) => (
    <Link to={url}>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src={image} alt={alt}/>
        </div>
    </Link>
);

TagHeader.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    url: PropTypes.string.isRequired
};

export default TagHeader;