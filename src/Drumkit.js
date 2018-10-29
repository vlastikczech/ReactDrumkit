import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import'./Drumkit.css';

import Drumpads from './Drumpads'

export default class Drumkit extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: 'Click or Press a Key'
        }
    }

    handleDisplay = display => this.setState({ display })

    render(){
        return(
            <Container >
                <Row>
                <div id='drum-machine'>
                    <div id='display'>{this.state.display}</div>
                    <div id='drum-pads'>{boardOne.map(d => (
                        <Drumpads
                            key={d.id}
                            id={d.id}
                            keycode={d.keyCode}
                            letter={d.keyTrigger}
                            src={d.src}
                            handleDisplay={this.handleDisplay}
                        />
                    ))}</div>
                </div>
                </Row>
            </Container>
        )
    }
}
const boardOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},];
