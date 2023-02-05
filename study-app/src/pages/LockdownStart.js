import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';

class LockdownStart extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

        this.state = {
            duration: 0,
            numBreaks: 0,
        }
    }

    onChange(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <Container className='container'>
                <div style={{marginTop: "150px"}}></div>
                <Form>
                    <Form.Group className='form-group'>
                        <Form.Label className='form-label'>Duration</Form.Label>
                        <Form.Select name={'duration'} onChange={this.onChange} className='form-area'>
                            <option>Select a duration</option>
                            <option value={60}>01:00 hours</option>
                            <option value={120}>02:00 hours</option>
                            <option value={180}>03:00 hours</option>
                            <option value={240}>04:00 hours</option>
                            <option value={300}>05:00 hours</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='form-group'>
                        <Form.Label className='form-label'>Number of breaks</Form.Label>
                        <Form.Control type="number" name={'numBreaks'} onChange={this.onChange} className='form-area' />
                    </Form.Group>

                    {
                        this.state.duration !== 0 && this.state.numBreaks !== 0 
                        ?
                        <div className="lockdown-status">
                            {`Your study lockdown will be set for ${this.state.duration / this.state.numBreaks} minute intervals.`}
                        </div> 
                    :
                        <div className="lockdown-status">Please choose how long you want to study.</div>
                    }

                    <div className='lockdown-button-container'>
                        <Link to='/lockdown'>
                            <Button variant="primary" type="submit" className={'lockdown-button'}>
                                Start
                            </Button>
                        </Link>
                    </div>
                </Form>
            </Container>
        );
    }
}

export default LockdownStart;