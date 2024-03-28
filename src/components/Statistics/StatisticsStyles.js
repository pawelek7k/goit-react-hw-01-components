import styled from "styled-components";

const StatisticsContainer = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
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

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      .label {
        font-weight: bold;
      }

      .percentage {
        color: #666;
      }
    }
  }
`;

export default StatisticsContainer;
