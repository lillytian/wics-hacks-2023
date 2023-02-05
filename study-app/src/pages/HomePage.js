import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Coin from '../assets/coin.png';
import Logo from '../assets/logo.png';
import Game from '../components/Game';

import GameModal from '../components/GameModal.js';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            isOpen: false,
            game: '',
            time: 0,
        }
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    closeModal() {
        this.setState( {isOpen: false })
    }

    onClickGame(choice, time) {
        this.setState( {game: choice, time: time, isOpen: true});
    }

    render() {
        return (
            <Container className='container'>
                <span className='title-container'><img src={Logo} className='pomoplay-img' /> <h1 className="pomoplay-title"><em>pomoplay</em></h1></span>
                <Row>
                    <Col style={{marginTop: '32px', marginBottom: '32px'}}>
                        <h3>Congrats! You have 40<img src={Coin} id={'home-coin'} /></h3>
                        <h4>Choose a game to redeem your coins.</h4>
                    </Col>
                </Row>
                <Row style={{marginBottom: '48px'}}>
                    <Col>
                        <Row className={'game-row'}>
                            <Col className={'game-col'}>
                                <Game game='solitaire' amount={5} onClick={() => this.onClickGame('solitaire', 10)} />
                            </Col>
                            <Col className={'game-col'}>
                                <Game game='minesweeper' amount={5} onClick={() => this.onClickGame('minesweeper', 5)}  />
                            </Col>
                        </Row>
                        <Row className={'game-row'}>
                            <Col className={'game-col'}>
                                <Game game='memory' amount={5} onClick={() => this.onClickGame('memory', 3)}  />
                            </Col>
                            <Col className={'game-col'}>
                                <Game game='snake' amount={5} onClick={() => this.onClickGame('snake', 3)}  />
                            </Col>
                        </Row>
                        <Row className={'game-row'}>
                            <Col className={'game-col'}>
                                <Game game='crossword' amount={5} onClick={() => this.onClickGame('crossword', 10)}  />
                            </Col>
                            <Col className={'game-col'}>
                                <Game game='pac-man' amount={5} onClick={() => this.onClickGame('pac-man', 5)}  />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <GameModal isOpen={this.state.isOpen} onClose={this.closeModal} title={this.state.game} time={this.state.time} amount={5} />
            </Container>
        );
    }
}

export default HomePage;