import { Box, Modal, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

class LockdownTimer extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            isOpen: false
        }
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    closeModal() {
        this.setState( {isOpen: false })
    }

    render() {

        return (
            <Container className='container'>
                <Row style={{marginTop: '72px', marginBottom: '72px'}}>
                    <Col>
                        <Row>
                            <Col>
                                <div className='countdown-container'>
                                    <CountdownCircleTimer
                                        isPlaying
                                        duration={15 * 60}
                                        colors={['#DAEAF6']}
                                        strokeWidth={24}
                                        size={300}
                                    >
                                        {({ remainingTime }) => {
                                            const minutes = Math.floor(remainingTime / 60).toLocaleString('en-US', {
                                                minimumIntegerDigits: 2,
                                            })
                                            const seconds = (remainingTime % 60).toLocaleString('en-US', {
                                                minimumIntegerDigits: 2,
                                            })

                                            return <div className='countdown-time'>{`${minutes}:${seconds}`}</div>
                                        }}
                                    </CountdownCircleTimer>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='lockdown-button-container'>
                                    {/* <Link to='/setup'> */}
                                        <Button className='countdown-stop-button' onClick={this.openModal}>Stop</Button>
                                    {/* </Link> */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 style={{marginBottom: '12px'}}>Number of coins acquired</h2>
                        <h4>No coins have been aquired yet.</h4>
                    </Col>
                </Row>

                <Modal
                    open={this.state.isOpen}
                    onClose={this.closeModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='stop-countdown-box'>
                        <h2 style={{marginBottom: '8px'}}>Are you sure you want to stop studying?</h2>
                        <span>Any progress you made will be lost, but you will be able to keep the coins that you have acquired so far.</span>
                        <p>
                            Enter your account password to exit lockdown mode.
                        </p>
                            <Form>
                                <Form.Group className='form-group' style={{marginTop: '16px'}}>
                                    <Form.Control type="password" name={'password'} onChange={null} className='form-area' />
                                </Form.Group>

                                <div className='countdown-button-container'>
                                    <Link to='/setup'>
                                        <Button variant="primary" type="submit" className={'lockdown-button'}>
                                            Confirm
                                        </Button>
                                    </Link>
                                </div>
                            </Form>
                    </Box>
                </Modal>

            </Container>
        );
    }
}

export default LockdownTimer;