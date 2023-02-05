import React, { Component } from 'react';

import Coin from '../assets/coin.png';
import Crossword from '../assets/crossword.png';
import Logo from '../assets/logo.png';
import MatchingGame from '../assets/matching-game.png';
import Minesweep from '../assets/minesweep.png';
import PacMan from '../assets/pac-man.png';
import Solitaire from '../assets/solitaire.png';
import Snake from '../assets/snake.png'

class Game extends Component {
    render() {
        return (
            <div className='game-container'>
                <img src={this.getGame(this.props.game)} className={'game-option'} />
                <div className="game-amount">{this.props.amount}<img src={Coin} id={'home-coin'} /></div>
            </div>
        );
    }

    getGame(choice) {
        switch (choice) {
            case 'crossword':
                return Crossword;
            case 'memory':
                return MatchingGame;
            case 'minesweeper':
                return Minesweep;
            case 'pac-man':
                return PacMan;
            case 'solitaire':
                return Solitaire;
            case 'snake':
                return Snake;
            default:
                return Logo;
        }
    }
}

export default Game;