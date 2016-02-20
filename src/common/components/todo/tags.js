import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Tags extends Component {
    render() {
        const { tags } = this.props
        return (
            <span  className='tags'>
            {
<<<<<<< HEAD
                tags.map((item, index) =>(
                    <span className='tagBadge' key={index} > 
=======
                tags.map(item =>(
                    <span className='tagBadge'> 
>>>>>>> origin/master
                        <span className="badge3"></span>
                        { item.text }
                    </span>
                ))
            }
            </span>
        )
    }
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired),
}
