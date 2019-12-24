import React, { PureComponent as Component } from "react";
import styled from "styled-components";
import Tower from "./tower";

let TowersWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  text-align: center;
  width: 100%;
`;

class Towers extends Component {
  state = {
    towers: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/towers/")
      .then(response => response.json())
      .then(towers => this.setState({ towers: towers }));
  }

  render() {
    return (
      <TowersWrapper>
        {this.state.towers.map((tower, i) => (
          <Tower
            id={tower.id}
            title={tower.title}
            value={tower.value}
            minValue={tower.minValue}
            maxValue={tower.maxValue}
            key={i}
          ></Tower>
        ))}
      </TowersWrapper>
    );
  }
}

export default Towers;
