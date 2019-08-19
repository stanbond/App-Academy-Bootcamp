import React from "react";

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {idx: 0};
    }

    render() {
        return(
            <ul>
                <li>
                    <h1>{this.props.tab[0].title}</h1>
                    <article>{this.props.tab[0].content}</article>
                </li>
                <li>
                <h1>{this.props.tab[1].title}</h1>
                    <article>{this.props.tab[1].content}</article>
                </li>
                <li>
                <h1>{this.props.tab[2].title}</h1>
                    <article>{this.props.tab[2].content}</article>
                </li>
            </ul>
        )
    }
}