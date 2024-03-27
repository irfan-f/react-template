/**
 * Serves to act as a central location for all strings used in the application.
 */

/**
 * String to be displayed as the title of the application.
 * @type {string}
 */
const title: string = "Mahjong with Friends";
/**
 * String to be displayed as the description of the application.
 * @type {string}
 */
const description: string = "Play Mahjong with your friends online!";
/**
 * String to be displayed as the welcome message of the application.
 * @type {string}
 */
const welcome: string = "Welcome to Mahjong with Friends!";
/**
 * String to be displayed on the start button.
 * @type {string}
 */
const startGame: string = "Start Game";
/**
 * String to be displayed on the join game button.
 * @type {string}
 */
const joinGame: string = "Join Game";
/**
 * String to be displayed on the create game button.
 * @type {string}
 */
const createGame: string = "Create Game";
/**
 * String to be displayed as the placeholder for the join game code input.
 * @type {string}
 */
const joinGameCodeMessage: string = "Enter Game Code";
/**
 * String to be displayed adjacent to the game code display.
 * @type {string}
 */
const gameCode: string = "Game Code";
/**
 * String to be displayed when the game code is copied to the clipboard.
 * @type {string}
 */
const gameCodeCopied: string = "Game code copied to clipboard!";
/**
 * String to be displayed when the game code fails to copy to the clipboard.
 * @type {string}
 */
const gameCodeCopyError: string = "Failed to copy game code to clipboard!";
/**
 * String to be displayed when the game code is invalid.
 * @type {string}
 */
const gameCodeInvalid: string = "Invalid game code!";
/**
 * String to be displayed when the game code is not found.
 * @type {string}
 */
const gameCodeNotFound: string = "Game not found!";
/**
 * String to be displayed when the game code is expired.
 * @type {string}
 */
const gameCodeExpired: string = "Game code expired!";
/**
 * String to be displayed when the game is full.
 * @type {string}
 */
const gameCodeFull: string = "Game is full!";
/**
 * String to be displayed on the rejoin button.
 * @type {string}
 */
const gameCodeRejoin: string = "Rejoin Game";
/**
 * String to be displayed when user fails to rejoin game.
 * @type {string}
 */
const gameCodeRejoinError: string = "Failed to rejoin game!";
/**
 * String to be displayed when a game with game code is not found.
 * @type {string}
 */
const gameCodeRejoinNotFound: string = "Game not found!";
/**
 * String to be displayed when a game with game code is expired.
 * @type {string}
 */
const gameCodeRejoinExpired: string = "Game code expired!";
/**
 * String to be displayed when a game with game code is full.
 * @type {string}
 */
const gameCodeRejoinFull: string = "Game is full!";
/**
 * String to be displayed on the rejoin error button.
 * @type {string}
 */
const gameCodeRejoinErrorButton: string = "Go Home";

export interface Strings {
  title: string;
  description: string;
  welcome: string;
  startGame: string;
  joinGame: string;
  createGame: string;
  joinGameCodeMessage: string;
  gameCode: string;
  gameCodeCopied: string;
  gameCodeCopyError: string;
  gameCodeInvalid: string;
  gameCodeNotFound: string;
  gameCodeExpired: string;
  gameCodeFull: string;
  gameCodeRejoin: string;
  gameCodeRejoinError: string;
  gameCodeRejoinNotFound: string;
  gameCodeRejoinExpired: string;
  gameCodeRejoinFull: string;
  gameCodeRejoinErrorButton: string;
}

export const strings: Strings = {
  title,
  description,
  welcome,
  startGame,
  joinGame,
  createGame,
  joinGameCodeMessage,
  gameCode,
  gameCodeCopied,
  gameCodeCopyError,
  gameCodeInvalid,
  gameCodeNotFound,
  gameCodeExpired,
  gameCodeFull,
  gameCodeRejoin,
  gameCodeRejoinError,
  gameCodeRejoinNotFound,
  gameCodeRejoinExpired,
  gameCodeRejoinFull,
  gameCodeRejoinErrorButton,
};
