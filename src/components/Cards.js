import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="cards">
                <div className="card1">
                        <div className="column1">
                            <p className="name">OEMS</p>
                            <p className="number">12</p>
                        </div>
                        <div className="column2">
                            <i className="fa fa-suitcase iconSize" aria-hidden="true"></i>
                        </div>
                </div>
                <div className="card1">
                        <div className="column1">
                            <p className="name">PRODUCT TYPES</p>
                            <p className="number">6</p>
                        </div>
                        <div className="column2">
                        <i className="fa fa-tag iconSize" aria-hidden="true"></i>
                        </div>
                </div>
                <div className="card1">
                        <div className="column1">
                            <p className="name">PRODUCTS</p>
                            <p className="number">742</p>
                        </div>
                        <div className="column2">
                        <i className="fa fa-server iconSize" aria-hidden="true"></i>
                        </div>
                </div>
                <div className="card1">
                        <div className="column1">
                            <p className="name">ARCHIVED PRODUCTS</p>
                            <p className="number">27</p>
                        </div>
                        <div className="column2">
                        <i className="fa fa-archive iconSize" aria-hidden="true"></i>
                        </div>
                </div>

                {/* <div className="card1">
                    <div className="row1">
                        <div className="column1">
                            <p className="name">PRODUCT TYPES</p>
                            <h1 className="number">6</h1>
                        </div>
                        <div className="column2">
                            <p>kshf</p>
                            <i class="fa fa-tag" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <div className="row1">
                        <div className="column1">
                            <p className="name">PRODUCTS</p>
                            <h1 className="number">742</h1>
                        </div>
                        <div className="column2">
                            <p>kshf</p>
                            <i class="fa fa-tasks" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>

                <div className="card1">
                    <div className="row1">
                        <div className="column1">
                            <p className="name">ARCHIVED PRODUCTS</p>
                            <h1 className="number">27</h1>
                        </div>
                        <div className="column2">
                            <p>kshf</p>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default Card