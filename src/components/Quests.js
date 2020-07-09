import React from 'react';
import {NavLink} from "react-router-dom";

export const Quests = ({playQuest, quest}) => {
    return (
        <div className={"quests-container"}>
            <span className={"fire"} onClick={playQuest} role={"img"} aria-label={""}>🔥</span>
            <div>
                <span className={"quest-text"}>{quest}</span>
            </div>
            <NavLink className={"back-to-fant-button"} to={"/"}>&sim;Режим Фантов&sim;</NavLink>
        </div>
    );
};

