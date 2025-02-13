import React from 'react'
import C from './C';

const B = (props) => {

    return (
        <div>
            B component -{props.com}
            <C count={props.count} />
        </div>
    );
};


export default B;
