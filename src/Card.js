import React, { Component } from 'react';
import './Card.css';
import _ from 'lodash';

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let cardClasses = ['flip-container'];
        if (this.props.show){
            cardClasses.push('hover')
        }
        return (
            <div className="card">
                <div className={cardClasses.join(' ')} onClick={this.props.onClick}>
                    <div className="flipper">
                        <div className="front">
                        </div>
                        <div className="back" style={{backgroundImage : 'url(' + this.props.image +')'}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card