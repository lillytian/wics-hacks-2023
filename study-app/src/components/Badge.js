import React, { Component } from 'react';

// icons for the badge
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Col, Row } from 'react-bootstrap';

class Badge extends Component {
    render() {
        const badgeColor = this.props.color + '-badge';

        return (
            <div className={badgeColor + ' badge-format'}>
                <Row>
                    <Col xs={3} style={{width: '15%', display: 'inline-block'}}>
                        {getIcon(this.props.icon)}
                    </Col>
                    <Col xs={3} style={{width: '85%', display: 'inline-block'}}>
                        <span className={'badge-title'}>{this.props.title}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

function getIcon(choice) {
    switch (choice) {
        case 'time':
            return <AccessAlarmIcon sx={{fontSize: 30}} className={'badge-icon'} style={{verticalAlign: 'middle'}} />
        case 'game':
            return <SportsEsportsIcon sx={{fontSize: 30}} className={'badge-icon'} style={{verticalAlign: 'middle'}} />
        case 'sun':
            return <WbSunnyIcon sx={{fontSize: 30}} className={'badge-icon'} style={{verticalAlign: 'middle'}} />
        default:
            return <CheckCircleIcon sx={{fontSize: 30}} className={'badge-icon'} style={{verticalAlign: 'middle'}} />
    }
}

export default Badge;