import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: #f9f9f9;
  padding: 2rem 3.5rem;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .description {
    .avatar {
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .name {
      font-size: 20px;
      font-weight: bold;
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
