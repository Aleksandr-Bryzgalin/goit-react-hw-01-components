import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="FriendList__item">
      {isOnline ? (
        <span className="FriendListItem-statusOnline">{isOnline}</span>
      ) : (
        <span className="FriendListItem-statusOfline">{isOnline}</span>
      )}
      <span className="FriendList__item-status">{isOnline}</span>
      <img
        className="FriendList__item-avatar"
        src={avatar}
        alt={name}
        width="48"
      />
      <p className="FriendList__item-name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };
