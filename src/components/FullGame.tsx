import React from "react";
import { Card } from "../state";
import { ProgressBar } from "./ProgressBar";
import { GameDifficulty, GlobalState } from "../helpers";
import { GameField } from "./GameField";
import { StartScreen } from "./StartScreen";

export function FullGame(props: FullGameProps) {
    return (
        <div
            className={"game " + props.theme}
            onMouseDown={(e: React.MouseEvent<HTMLElement>): void => {
                e.preventDefault();
            }}
        >
            <ProgressBar progress={props.timeProgress} />
            {props.globalState === GlobalState.GameInProgress ? (
                <GameField
                    cards={props.cards}
                    difficulty={props.difficulty}
                    onCardClick={props.onCardClick}
                />
            ) : (
                <StartScreen
                    theme={props.theme}
                    globalState={props.globalState}
                    onGameStart={props.onGameStart}
                    onChangeTheme={props.onChangeTheme}
                />
            )}
        </div>
    );
}

interface FullGameProps {
    timeProgress: number;
    globalState: GlobalState;
    cards: Card[];
    difficulty: GameDifficulty;
    theme: string;
    onCardClick: (cardIndex: number) => void;
    onGameStart: (diff: GameDifficulty) => void;
    onChangeTheme: (theme: string) => void;
}