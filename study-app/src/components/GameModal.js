import React, { Component } from 'react';
import { Box, Modal } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import Coin from '../assets/coin.png';
import Crossword from '../assets/crossword.png';
import Logo from '../assets/logo.png';
import MatchingGame from '../assets/matching-game.png';
import Minesweep from '../assets/minesweep.png';
import PacMan from '../assets/pac-man.png';
import Solitaire from '../assets/solitaire.png';
import Snake from '../assets/snake.png'

class GameModal extends Component {
    render() {
        return (
            <Modal
                open={this.props.isOpen}
                onClose={this.props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='stop-countdown-box'>
                    <div className={'game-modal-title'}>
                        <h2 style={{marginBottom: '8px'}}>{this.getTitle()}</h2>
                        <img src={this.getImage()} className={'game-modal-img'} />
                    </div>
                    <p>
                        Average time to finish: {this.props.time} minutes.
                    </p>
                    <Form>
                        <div className='countdown-button-container'>
                            <Button variant="primary" type="submit" className={'game-modal-button'}>
                                <span>Redeem for {this.props.amount}<img src={Coin} id={'game-coin'} /></span>
                            </Button>
                        </div>
                    </Form>
                    </Box>
                </Modal>
        );
    }

    getImage() {
        switch (this.props.title) {
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

    getTitle() {
        switch (this.props.title) {
            case 'crossword':
                return 'Crossword Puzzle';
            case 'memory':
                return 'Memory Game';
            case 'minesweeper':
                return 'Minesweeper';
            case 'pac-man':
                return 'Pac-Man';
            case 'solitaire':
                return 'Solitaire';
            case 'snake':
                return 'Snake';
            default:
                return 'Unknown';
        }
    }
}

export default GameModal;