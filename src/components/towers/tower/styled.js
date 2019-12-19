import styled from "styled-components";

const TowerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  p {
    text-align: center;
  }

  svg {
    margin-top: -24px;
    margin-bottom: -60px;
  }
  .underline {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 50%;
      height: 3px;
      background: ${({ towerInfo }) =>
        towerInfo.value <= towerInfo.maxValue &&
        towerInfo.value >= towerInfo.minValue
          ? "#21B249"
          : "#c43535"};
      bottom: 0;
      left: 25%;
    }
  }
`;

export default TowerWrapper;
