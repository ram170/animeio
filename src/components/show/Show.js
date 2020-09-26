import React, { Component } from 'react';
import './Show.css';

export class Show extends Component {
    render() {
        return (
            <div className={ this.props.length!==this.props.anime.LoR ? "show-main bottom-border" : "show-main"}>
                { this.props.anime && this.props.anime.LoR % 2 === 0 && window.screen.width > 1000 ?
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <span className="anime-title"> {this.props.anime.title} </span> <br></br>
                                <span className="popularity"> Popularity Rank: {this.props.anime.popularityRank}</span> <br></br><br></br>
                                <span className="heading">Description:</span> {this.props.anime.description} <br></br>
                                <div className="block-component">
                                    <span className="heading">End Date:</span> {this.props.anime.endDate}
                                    &nbsp; &nbsp;
                                    <span className="heading">Episode Count:</span> {this.props.anime.episodeCount}
                                </div>
                                <span className="heading">Age Rating:</span> {this.props.anime.ageRating} <br></br>
                            </div>
                            <div className="col-md-4">
                                <img src={this.props.anime.poster} className="anime-poster right"></img>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={this.props.anime.poster} className="anime-poster"></img>
                            </div>
                            <div className="col-md-8">
                                <span className="anime-title"> {this.props.anime.title} </span> <br></br>
                                <span className="popularity">Popularity Rank: {this.props.anime.popularityRank}</span> <br></br><br></br>
                                <span className="heading">Description:</span> {this.props.anime.description} <br></br>
                                <div className="block-component">
                                    <span className="heading">End Date:</span> {this.props.anime.endDate}
                                    &nbsp; &nbsp;
                                    <span className="heading">Episode Count:</span> {this.props.anime.episodeCount}
                                </div>
                                <span className="heading">Age Rating:</span> {this.props.anime.ageRating} <br></br>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Show
