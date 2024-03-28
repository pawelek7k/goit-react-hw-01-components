import PropTypes from "prop-types";
import FriendsListContainer from "./FriendsListStyles";

export const FriendsList = ({ friends }) => {
  return (
    <>
      <FriendsListContainer>
        <ul className="friends-list">
          {friends.map(({ avatar, name, isOnline, id }) => (
            <li className="item" key={id}>
              <span
                className={`status ${isOnline ? "online" : "offline"}`}
              ></span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          ))}
        </ul>
      </FriendsListContainer>
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};
