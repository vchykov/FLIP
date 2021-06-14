import { State } from "./state";
import React from "react";
import ReactDOM from "react-dom";
import { FullGame } from "./components/FullGame";
import { GameDifficulty, getElement } from "./helpers";

export class Renderer {
    render(state: State): void {
        ReactDOM.render(
            <FullGame
                difficulty={state.difficulty}
                cards={state.cards}
                globalState={state.globalState}
                timeProgress={state.timeProgress}
                theme={state.theme}
                onCardClick={state.processCardClick.bind(state)}
                onGameStart={state.processGameStart.bind(state)}
                onChangeTheme={state.processChangeTheme.bind(state)}
            />,
            getElement(".react-app")
        );
    }
}
