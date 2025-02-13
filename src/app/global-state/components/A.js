import React from "react";
import B from "./B"

const A = (props) => {
    return (
        <div>
            A component -{props.com}
            <B count={props.count} />
        </div>
    );
};

export default A;