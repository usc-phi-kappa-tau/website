import React from 'react';

const Individual = ({ data }) => {
    const { name, title, image, email } = data;
    return (
        <h3>{name}{title ? ` - ${title}` : ""}</h3>
    );
}

export default Individual;