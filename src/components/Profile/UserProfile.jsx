import PropTypes from "prop-types";

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}l</p>
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
