import { Col, Container, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';

import Luigi from '../assets/luigi.png';
import SettingsIcon from '@mui/icons-material/Settings';
import Coin from '../assets/coin.png';

class ProfilePage extends Component {
    render() {
        return (
            <Container className='container'>
                <Row style={{textAlign: 'end'}}>
                    <Col>
                        <Link to="/settings">
                            <SettingsIcon fontSize='large' className='settings-icon' />
                        </Link>
                    </Col>
                </Row>
                <Row style={{textAlign: 'center', marginTop: '36px', marginBottom: '60px'}}> 
                    <Col>
                        <Row style={{marginBottom: '40px'}}>
                            <img className={'profile-img'} src={Luigi} />
                        </Row>
                        <Row>
                            <h1>Olivia</h1>
                        </Row>
                        <Row>
                            <span className="profile-coin-desc">40<img src={Coin} id={'profile-coin'} /></span>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h2>Your Badges</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Badge color='purple' icon='time' title='Work Hard, Play Hard' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Badge color='yellow' icon='sun' title='Weekend Warrior' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Badge color='red' icon='game' title='Novice Twitch Streamer' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfilePage;