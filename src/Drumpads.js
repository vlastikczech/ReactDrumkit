import React, { Component } from 'react';

import './Drumpads.css'


var styles = {
    on: {
        color: 'pink'
    },
    off: {
        color: 'white'
    }
}

export default class Drumpads extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keypressActive: 'off'
        }
    }

    changeColor = () => {
        this.setState({
            kepressActive: 'on'
        })
    }

    resetColor = () => {
        this.setState({
            keypressActive: 'off'
        })
    }





    componentDidMount() {
        console.log(this.audio)
        document.addEventListener('keydown', this.handleKeydown)
        window.focus()
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        if(e.keyCode === this.props.keycode) {
            this.audio.play()
            this.audio.currentTime = 0 
            this.props.handleDisplay(this.props.id)
            document.getElementById(this.props.id).style.backgroundColor = 'white'
            document.getElementById(this.props.id).style.color = 'black'

        }
        else {
            document.getElementById(this.props.id).style.backgroundColor = 'transparent'
            document.getElementById(this.props.id).style.color = 'white'
        }
    }

    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
    }

    render() {
        return (
            <div
                className='drum-pad'
                id={this.props.id}
                onClick={this.handleClick}
            >
                <h1>{this.props.letter}</h1>
                <audio id={this.props.letter}
                       className='pads'
                       src={this.props.src}
                       ref={ref => this.audio = ref}
                ></audio>
            </div>
        )
    }
}
