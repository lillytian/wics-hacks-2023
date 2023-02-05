import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Coin from '../assets/coin.png';
import Logo from '../assets/logo.png';
import Game from '../components/Game';

class HomePage extends Component {
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
                                <Game game='solitaire' amount={5} />
                            </Col>
                            <Col className={'game-col'}>
                                <Game game='minesweeper' amount={5} />
                            </Col>
                        </Row>
                        <Row className={'game-row'}>
                            <Col className={'game-col'}>
                                <Game game='memory' amount={5} />
                            </Col>
                            <Col className={'game-col'}>
                                <Game game='snake' amount={5} />
                            </Col>
                        </Row>
                        <Row className={'game-row'}>
                            <Col className={'game-col'}>
                                <Game game='crossword' amount={5} />
                            </Col>
                            <Col className={'game-col'}>
                                <Game game='pac-man' amount={5} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomePage;