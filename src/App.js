import React, { Component } from 'react';
import Banner from './components/banner/Banner';
import Show from './components/show/Show';
import './App.css';
import axios from 'axios';

export class App extends Component {

  state = {
    responseSuccess: true,
    responseJSON: []
  }

  getData = (param) => {
    if (param === null) {
      this.clearState();
      this.setState({ responseSuccess: false });
      return;
    }
    axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${param}`)
    .then((res) => {
      if (res.data.data.length > 0) {
        this.setState({ responseSuccess: true});
        this.setState({ responseJSON: []});
        for(let i = 0 ; i < res.data.data.length ; i++) {
          let structuredData = this.restructureData(res.data.data[i], i);
          this.setState({ responseJSON: [...this.state.responseJSON, structuredData]});
        }
        document.getElementsByClassName('success-text')[0].style.textDecoration = 'none';
        document.querySelector('.success-text').scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        this.setState({ responseSuccess: false});
        this.setState({ responseJSON: []});
        document.getElementsByClassName('success-text')[0].style.textDecoration = 'line-through';
      }
    });
  }

  restructureData = (data, i) => {
    return {
      title: data.attributes.canonicalTitle,
      description: data.attributes.description,
      endDate: data.attributes.endDate,
      episodeCount: data.attributes.episodeCount,
      poster: data.attributes.posterImage.large,
      popularityRank: data.attributes.popularityRank,
      ageRating: data.attributes.ageRating,
      LoR: i+1
    }
  }

  clearState = () => {
    this.setState({responseJSON: []});
    this.setState({ responseSuccess: true});
    document.getElementsByClassName('success-text')[0].style.textDecoration = 'line-through';
  }

  render() {
    return (
      <div>
        {/* TODO: Add loader */}
        <div className="bottom-border">
          <Banner getData={this.getData} status={this.state.responseSuccess} response={this.state.responseJSON} clearState={this.clearState}></Banner>
        </div>
        <div className="show-main-container">
          <br></br>
          <p className="success-text"> Hurray! We've got few result(s) that fit your search key! </p>
          { this.state.responseJSON.length>0 ? this.state.responseJSON.map(value => <Show anime={value} length={this.state.responseJSON.length}></Show> ) : null}
        </div>
      </div>
    )
  }
}

export default App

