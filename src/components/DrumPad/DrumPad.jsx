import React from 'react';
import { motion } from "framer-motion"


import './style.scss';

export class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.audioRef = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);

        //let targetRotation = Math.floor(Math.random() * 15) + 1; // this will get a number between 1 and 15;
        //targetRotation *= Math.round(Math.random()) ? 1 : -1; // this will add minus sign in 50% of cases

        this.state = {
            playing: false,
            //targetRotation
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleOnClick(e) {
        console.log(e);
        this.playSound();
    }

    handleKeyDown(e) {
        if (e.keyCode !== this.props.keyCode) {
            return;
        }

        this.playSound();
    }

    playSound() {
        this.setState({playing: true});
        setTimeout(() => this.setState({playing: false}), 100);

        this.audioRef.current.currentTime = 0;
        this.audioRef.current.play();
    }
    
    render() {
        const {playing} = this.state;

        console.log(this.props);

        return (
            <>
                <motion.div 
                    className="drum-pad" 
                    onClick={this.handleOnClick}
                    animate={{ 
                        background: playing ? this.props.bgColorslight : this.props.bgColor ,
                        boxShadow: playing ?  '0 0 0 transparent' : '5px 5px 5px grey',
                        scale: playing ? 0.8 : 1.0,
                        //rotate: playing ? targetRotation : 0,
                    }}
                >
                    {this.props.label}
                </motion.div>
                <audio ref={this.audioRef} src={this.props.audioSrc}></audio>
            </>
        );
    }
}