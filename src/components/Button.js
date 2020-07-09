import React from 'react';

export const Button = ({play}) => {
    return (
        <div className={"button-container"}>
            <span onClick={play} role={"img"} aria-label={""}>🔥</span>
        </div>
    );
};

