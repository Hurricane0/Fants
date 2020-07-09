import React from 'react';
import { ReactComponent as Logo} from '../Infinity-1s-200px.svg';

export const Preloader = () => {
    return (
        <div>
            <Logo style={{backgroundColor: "#272727", height: "30px", width: "30px", color: "#fff" }}/>
        </div>
    );
};

