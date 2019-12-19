import React, { PureComponent as Component } from "react";
import styled from "styled-components";
import Tower from "./tower";

// interface TowerIndicator {
//   id: string; // Id башни
//   title: string; // Имя башни
//   value: number; // Значение (масса карналита)
//   minValue: number; // Минимальное значение карналита в башне
//   maxValue: number; // Максимальное значение карналита в башне
// }
let TowersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100%;
`;

let towers = [
  {
    id: "1", // Id башни
    title: "Силосная башня №1", // Имя башни
    value: 1086, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  },
  {
    id: "2", // Id башни
    title: "Силосная башня №2", // Имя башни
    value: 412, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  },
  {
    id: "3", // Id башни
    title: "Силосная башня №3", // Имя башни
    value: 1000, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  },
  {
    id: "4", // Id башни
    title: "Силосная башня №4", // Имя башни
    value: 958, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  },
  {
    id: "5", // Id башни
    title: "Силосная башня №5", // Имя башни
    value: 100, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  },
  {
    id: "6", // Id башни
    title: "Силосная башня №6", // Имя башни
    value: 499, // Значение (масса карналита)
    minValue: 500, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  }
];

class Towers extends Component {
  render() {
    return (
      <TowersWrapper>
        {towers.map((tower, i) => (
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
