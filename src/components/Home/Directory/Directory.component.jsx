import React, { Component } from "react";
import MenuItems from "./MenuItems/MenuItems.components";
import "./Directory.styles.scss";

export class Directory extends Component {
  state = {
    sections: [
      {
        id: 1,
        title: "boots",
        imageUrl: "/images/boots/boot1.jpg",
      },
      {
        id: 2,
        title: "loafers",
        imageUrl: "/images/loafers/loafer1.jpg",
      },
      {
        id: 3,
        title: "monkStraps",
        imageUrl: "/images/monkStraps/monkStrap1.jpg",
      },
      {
        id: 4,
        title: "oxfords",
        imageUrl: "/images/oxfords/oxford1.jpg",
        size: "large",
      },
      {
        id: 5,
        title: "sneakers",
        imageUrl: "/images/sneakers/sneaker1.jpg",
        size: "large",
      },
    ],
  };

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-container">
        {sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItems key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
