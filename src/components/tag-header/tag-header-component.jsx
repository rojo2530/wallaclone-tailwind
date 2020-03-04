import React from 'react';
import PropTypes from 'prop-types';

const TagHeader = ({ image, alt }) => (
    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img className="max-h-12" src={image} alt={alt}/>
    </div>
);

TagHeader.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default TagHeader;