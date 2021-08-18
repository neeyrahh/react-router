import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import MovieList from "./Movie";
import AddMovie from "./AddMovie";

import chiefdaddy from "../Posters/chiefdaddy.jpg";
import citation from "../Posters/citation.jpg";
import kingofboys from "../Posters/kingofboys.jpg";
import oloture from "../Posters/oloture.jpg";
import sugarrush from "../Posters/sugarrush.jpg";
import whoistheboss from "../Posters/whoistheboss.jpg";


class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [
        {
          image: chiefdaddy,
          title: "Chief Daddy",
          year: "2018",
          rating: "5",
        },
        {
          image: citation,
          title: "Citation",
          year: "2020",
          rating: "4",
        },
        {
          image: kingofboys,
          title: "King of Boys",
          year: "2018",
          rating: "4",
        },
        {
          image: oloture,
          title: "Oloture",
          year: "2020",
          rating: "3",
        },
        {
          image: sugarrush,
          title: "Sugar rush",
          year: "2019",
          rating: "2",
        },
        {
          image: whoistheboss,
          title: "who is the boss",
          year: "2020",
          rating: "5",
        },
        
      ],
      modal: false,
    };
  }
  toggle = () =>
    this.setState({
      modal: !this.state.modal,
    });

  addMovie = (item) => {
    let newState = this.state.movie;
    newState.push(item);
    this.setState({
      movie: newState,
    });
  };

  render() {
    return (
      <div className="container">
        <Row>
          {this.props.search
            ? this.state.movie
                .filter((el) =>
                  el.title.match(this.props.search.toLowerCase().trim())
                )
                .map((element, key) => (
                  <Col key={key} sm={3}>
                    <MovieList movie={element} />
                  </Col>
                ))
            : this.props.rate
            ? this.state.movie
                .filter((el) => {
                  return el.rating >= this.props.rate;
                })
                .map((element, key) => (
                  <Col key={key} sm={3}>
                    <MovieList movie={element} />
                  </Col>
                ))
            : this.state.movie.map((element, key) => (
                <Col key={key} sm={3}>
                  <MovieList movie={element} />
                </Col>
              ))}
        </Row>
        <Row>
          <AddMovie
            modal={this.state.modal}
            toggle={this.toggle}
            addItem={this.addMovie}
          />
        </Row>
      </div>
    );
  }
}

export default MovieContainer;
