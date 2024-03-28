import styled from "styled-components";

const FriendsListContainer = styled.div`
  margin-top: 5rem;

  ul {
    padding: 0rem;
  }

  .item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 2rem;
    padding: 0.5rem 8rem 0.5rem 2rem;
    color: #000000b5;
    letter-spacing: 2px;
    .status {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .online {
      background-color: green;
    }

    .offline {
      background-color: red;
    }

    .avatar {
      border-radius: 50%;
      margin-right: 10px;
    }

    .name {
      font-weight: bold;
    }
  }
`;

export default FriendsListContainer;
