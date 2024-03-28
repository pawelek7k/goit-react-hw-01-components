import styled from "styled-components";

const StatisticsContainer = styled.section`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #000000ba;
  }

  .stat-list {
    color: #000000ba;
    display: flex;
    padding: 0rem;
    border: 1px solid #0000000d;
    border-radius: 2rem;

    .item {
      display: flex;
      padding: 0.5rem 2rem;
      flex-direction: column;

      .label {
        font-weight: bold;
        letter-spacing: 2px;
      }

      .percentage {
        color: #fff;
        font-weight: bold;
      }
    }

    .item:last-child {
      background-color: #ffa8a8;
      border-radius: 0rem 2rem 2rem 0rem;
    }
    .item:first-child {
      background-color: #aaaae1;
      border-radius: 2rem 0rem 0rem 2rem;
    }
    .item:nth-child(2) {
      background-color: #5d5dc9;
    }
    .item:nth-child(3) {
      background-color: #8296af;
    }
    .item:nth-child(4) {
      background-color: #a96fa9;
    }
  }
`;

export default StatisticsContainer;
