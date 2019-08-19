import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({time: new Date()});
    }

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        console.log(hours);

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (hours < 10) {
            hours = `0${hours}`;
        }

        return (
            <div className="widget-clock">
                <h1>It's a clock, yo</h1>
                <div className="clock">
                    <p>This is the time:
                        <span>{hours}:{minutes}:{seconds}</span>
                    </p>
                </div>
            </div>
        )
    }
}