import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .description {
    margin-right: 20px;

    .avatar {
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .name {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
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

    li {
      display: flex;
      align-items: center;

      margin-top: 10px;

      .label {
        font-weight: bold;
        color: black;
        margin-right: 10px;
      }

      .quantity {
        color: #666;
      }
    }
  }
`;

export default ProfileContainer;
