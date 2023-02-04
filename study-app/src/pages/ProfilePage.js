import { Container, Grid, SvgIcon } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Luigi from '../assets/luigi.png';
import SettingsIcon from '@mui/icons-material/Settings';
import Coin from '../assets/coin.png';

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Container className='container'>
                    <Grid container spacing={2} textAlign={"center"}>
                        <Grid item xs={12} style={{textAlign: 'end'}}>
                            <Link to="/settings">
                                <SettingsIcon fontSize='large' className='settings-icon' />
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <img className={'profile-img'} src={Luigi} />
                                </Grid>
                                <Grid item xs={12}>
                                    <h1>Olivia</h1>
                                </Grid>
                                <Grid item xs={12} style={{paddingTop: '0px'}}>
                                    <span className="profile-coin-desc">40<img src={Coin} id={'profile-coin'} /></span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            badges
                        </Grid>
                    </Grid>

                </Container>
            </div>
        );
    }
}

export default ProfilePage;