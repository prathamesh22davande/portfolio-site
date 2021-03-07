import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import github from "../assets/github.jpg";
import Card from "./Card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Prathamesh Davande",
          subTitle: "This is subTitle",
          imgSrc: github,
          link: "https://github.com/prathamesh22davande",
          selected: false,
        },
        {
          id: 1,
          title: "Prathamesh Davande",
          subTitle: "This is subTitle",
          imgSrc: github,
          link: "https://github.com/prathamesh22davande",
          selected: false,
        },
        {
          id: 2,
          title: "Prathamesh Davande",
          subTitle: "This is subTitle",
          imgSrc: github,
          link: "https://github.com/prathamesh22davande",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
