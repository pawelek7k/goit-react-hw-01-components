import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  flex-direction: column;
  border-radius: 2rem;
  width: 20rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;

  .description {
    .avatar {
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .name {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #000000ba;
      letter-spacing: 2px;
      text-align: center;
    }

    .tag {
      color: #666;
      margin-bottom: 5px;
    }

    .location {
      color: #999;
    }
  }

  .stats {
    list-style-type: none;
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    padding: 0px;
    letter-spacing: 1px;

    li {
      display: flex;
      align-items: center;
      flex-direction: column;

      margin-top: 10px;

      .label {
        font-weight: bold;
        color: #000000ba;
      }

      .quantity {
        color: #666;
      }
    }
  }
`;

export default ProfileContainer;
