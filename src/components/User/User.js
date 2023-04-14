import PropTypes from 'prop-types';
import { Image, Label, Stats, ListUser, Name, UserContainer,Tag, Location, QuantityLabel} from './User.styled';
export const Profile=({avatarSrc, name, tag, location, followers, quantityViews, quantityLikes})=>{
return(
    <UserContainer >
  <div >
    <Image
      src={avatarSrc}
      alt="User avatar"
     
    />
    <Name >{name}</Name>
    <Tag >@{tag}</Tag>
    <Location >{location}</Location>
  </div>

  <Stats >
    <ListUser>
      <Label >Followers</Label>
      <QuantityLabel >{followers}</QuantityLabel>
    </ListUser>
    <ListUser>
      <Label >Views</Label>
      <QuantityLabel >{quantityViews}</QuantityLabel>
    </ListUser>
    <ListUser>
      <Label >Likes</Label>
      <QuantityLabel >{quantityLikes}</QuantityLabel>
    </ListUser>
  </Stats>
</UserContainer>
)
}
Profile.propTypes={
    avatarSrc : PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    quantityViews: PropTypes.number,
    quantityLikes: PropTypes.number
}