import styled from "styled-components";

const TransactionStylesContainer = styled.div`
  padding: 0rem;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.5rem 2rem;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
    color: black;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2cc;
    color: black;
  }
`;

export default TransactionStylesContainer;
