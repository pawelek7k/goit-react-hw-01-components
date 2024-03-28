import PropTypes from "prop-types";
import ProfileContainer from "./UserProfileStyles";

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <ProfileContainer>
        <div className="profile">
          <div className="description">
            <img
              src={avatar}
              alt="User avatar"
              className="avatar"
              width="100"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
          </div>

          <ul className="stats">
            {Object.entries(stats).map(([label, quantity]) => (
              <li key={label}>
                <span className="label">{label}</span>
                <span className="quantity">{quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </ProfileContainer>
    </>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
