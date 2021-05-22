import React from 'react';
import PropTypes from 'prop-types';
import language from '../language';

const PublicInformation = ({ publicInformation }) => {
    console.log(language.copy);
    return <div>Hello</div>;
};

export default PublicInformation;

PublicInformation.propTypes = {
    courtAndInsolvencies: PropTypes.array.isRequired,
};
