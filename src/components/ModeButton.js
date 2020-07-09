import React from 'react';
import {NavLink} from "react-router-dom";

export const ModeButton = () => {
    return (
        <div className={"mode-button-container"}>
            <NavLink className={"button"} to={"/quests"}>&sim;Режим заданий&sim;</NavLink>
        </div>
    );
};

