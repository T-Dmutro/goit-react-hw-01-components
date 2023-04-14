import PropTypes from 'prop-types';
import {
  FriendItems,
  ListItem,
  IsOnline,
  UserAvatar,
  UserName,
} from './FriendListItem.styled';
export const FriendListItem = ({ items }) => {
  return (
    <FriendItems>
      {items?.map(item => (
        <ListItem key={item.id}>
          <IsOnline isOnline={item.isOnline}>{item.IsOnline}</IsOnline>
          <UserAvatar src={item.avatar} alt="User avatar" width="48" />
          <UserName>{item.name}</UserName>
        </ListItem>
      ))}
    </FriendItems>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
