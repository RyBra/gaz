import React, { PureComponent as Component } from "react";
import styled from "styled-components";

let TowerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  p {
    text-align: center;
  }

  svg {
    margin-top: -45px;
    margin-bottom: -60px;
  }
`;

class Tower extends Component {
  render() {
    const emptyLine = 460.5;
    const fullfiledLine = 65;

    let value = this.props.value;
    let maxValue = this.props.maxValue;
    let minValue = this.props.minValue;

    let currentProcentValue = (100 / (maxValue - minValue)) * value;
    //Шаг в 1% от 65 до 460.5
    let step = (emptyLine - fullfiledLine) * 0.01;
    let paintedLine = fullfiledLine + step * (100 - currentProcentValue); //2% заполнения, а нужно 98%

    return (
      <TowerWrapper>
        <h2>{this.props.title}</h2>
        <p>
          Уровень карналита <br /> {~~currentProcentValue}%
        </p>
        <svg
          width="155"
          height="618"
          viewBox="0 0 155 618"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M154.6 57.9H0V62.2H154.6V57.9Z" fill="#CBCBCB" />
          <path
            d="M145.9 65H8.6001V156.9H145.9V65Z"
            fill="url(#paint0_linear)"
          />
          <path d="M154.6 463.7H0V468H154.6V463.7Z" fill="#CBCBCB" />
          <path
            d="M145.9 166.5H8.6001V258.4H145.9V166.5Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M145.9 267.9H8.6001V359.8H145.9V267.9Z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M145.9 369.4H8.6001V461.3H145.9V369.4Z"
            fill="url(#paint3_linear)"
          />
          <path
            d="M68.6001 547.4L8.6001 470.8H145.9L86.0001 547.4H68.6001Z"
            fill="url(#paint4_linear)"
          />
          <path
            opacity="0.5"
            d={`M137.4 ${paintedLine}H18V460.5H137.4V255.4Z`}
            fill="#21B249"
          />
          <path d="M154.6 260.8H0V265.1H154.6V260.8Z" fill="#CBCBCB" />
          <path d="M154.6 362.2H0V366.5H154.6V362.2Z" fill="#CBCBCB" />
          <path d="M154.6 159.3H0V163.6H154.6V159.3Z" fill="#CBCBCB" />
          <path
            d="M53.7 53.6H100.8"
            stroke="#8B959F"
            strokeWidth="4"
            strokeMiterlimit="22.9256"
          />
          <path
            d="M75.8999 530.1H25.3999C19.8999 530.1 15.3999 525.6 15.3999 520.1V496.2C15.3999 490.7 19.8999 486.2 25.3999 486.2H75.8999C81.3999 486.2 85.8999 490.7 85.8999 496.2V520.1C85.8999 525.6 81.3999 530.1 75.8999 530.1Z"
            stroke="#21B149"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="11.9571"
              y1="110.956"
              x2="145.919"
              y2="110.947"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#616166" />
              <stop offset="0.21" stopColor="#9B9B9B" />
              <stop offset="1" stopColor="#48484F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="11.9571"
              y1="212.4"
              x2="145.919"
              y2="212.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#616166" />
              <stop offset="0.21" stopColor="#9B9B9B" />
              <stop offset="1" stopColor="#48484F" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="11.9571"
              y1="313.849"
              x2="145.919"
              y2="313.849"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#616166" />
              <stop offset="0.21" stopColor="#9B9B9B" />
              <stop offset="1" stopColor="#48484F" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="11.9571"
              y1="415.297"
              x2="145.919"
              y2="415.297"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#616166" />
              <stop offset="0.21" stopColor="#9B9B9B" />
              <stop offset="1" stopColor="#48484F" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="8.6128"
              y1="509.104"
              x2="145.922"
              y2="509.104"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#616166" />
              <stop offset="0.21" stopColor="#9B9B9B" />
              <stop offset="1" stopColor="#48484F" />
            </linearGradient>
          </defs>
        </svg>
        <p>Масса карналита</p>
        <p>{this.props.value}</p>
      </TowerWrapper>
    );
  }
}

export default Tower;
