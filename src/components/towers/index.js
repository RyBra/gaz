import React, { PureComponent as Component } from "react";
import Tower from "./tower";

// interface TowerIndicator {
//   id: string; // Id башни
//   title: string; // Имя башни
//   value: number; // Значение (масса карналита)
//   minValue: number; // Минимальное значение карналита в башне
//   maxValue: number; // Максимальное значение карналита в башне
// }
let towers = [
  {
    id: "1", // Id башни
    title: "Силосная башня №1", // Имя башни
    value: 1065, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  },
  {
    id: "1", // Id башни
    title: "Силосная башня №2", // Имя башни
    value: 1065, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  },
  {
    id: "1", // Id башни
    title: "Силосная башня №3", // Имя башни
    value: 1065, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  },
  {
    id: "1", // Id башни
    title: "Силосная башня №4", // Имя башни
    value: 1065, // Значение (масса карналита)
    minValue: 0, // Минимальное значение карналита в башне
    maxValue: 1086 // Максимальное значение карналита в башне
  }
];

class Towers extends Component {
  render() {
    return (
      <div>
        {towers.map(tower => (
          <Tower
            id={tower.id}
            title={tower.title}
            value={tower.value}
            minValue={tower.minValue}
            maxValue={tower.maxValue}
          ></Tower>
        ))}
      </div>
    );
  }
}

export default Towers;
