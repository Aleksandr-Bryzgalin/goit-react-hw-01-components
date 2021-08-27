import PropTypes from 'prop-types';
import './FriendList.css';
import { FriendListItem } from './FriendListItem';

function FriendList({ friends, id }) {
  return (
    <ul className="FriendList" key={id}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export { FriendList };
