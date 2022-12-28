// lib
import { createSlice } from "@reduxjs/toolkit";

type IGame = {
  isPaused: Boolean;
  score: number;
  level: number;
  snakeColor: string;
  snakeVelocity: number;
};

const initialState: IGame = {
  isPaused: true,
  score: 0,
  level: 1,
  snakeColor: "#000000",
  snakeVelocity: 10,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // update game paused state
    updateGamePausedState: (state: any, action: { payload: Boolean }) => {
      state.isPaused = action.payload;
    },
    // update level number
    updateLevelNumber: (state: any, action: { payload: number }) => {
      state.level = action.payload;
    },
    // update snake color
    updateSnakeColor: (state: any, action: { payload: string }) => {
      state.snakeColor = action.payload;
    },
    // update snake velocity
    updateSnakeVelocity: (state: any, action: { payload: number }) => {
      state.snakeVelocity = action.payload;
    },
    // update game score
    updateGameScore: (state: any, action: { payload: number }) => {
      state.score += action.payload;
    },
    // reset
    reset: (state: any) => {
      state = initialState;
    },
  },
});

export const getGameData = (state: any) => {
  return state.game;
};

export const {
  updateGamePausedState,
  updateLevelNumber,
  updateSnakeColor,
  updateSnakeVelocity,
  updateGameScore,
  reset,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
