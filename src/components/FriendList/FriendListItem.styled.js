import styled from '@emotion/styled';
export const FriendItems = styled.ul`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  box-sizing: inherit;
  margin: 40px auto 0px;
  padding: 0;
  margin-left: 90px;
  margin-right: 90px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 540px;
  height: 55px;
  padding: 30px;
  margin: auto;
  font-size: 28px;
  color: #1f630e;
  box-shadow: 0 2px 1px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%),
    0 1px 3px rgb(0 0 0 / 12%);
  border-radius: 0 0 4px 4px;
`;
export const IsOnline = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 48px;
  height: 48px;
  padding: 0px;
  margin-left: 15px;
  margin-right: 25px;
  font-size: 28px;
  box-shadow: 0 2px 1px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%),
    0 1px 3px rgb(0 0 0 / 12%);
  border-radius: 100%;
  background-color: ${props => {
    console.log(props.isOnline);

    return props.isOnline ? 'red' : 'green';
  }};;
`;
export const UserAvatar = styled.img`
  width: 48px;
  heigth: 100%;
  border-radius: 10px;
  margin-right: 15px;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
