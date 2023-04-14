import { Container } from './App.styled.js';
import { Profile } from '../User/User.js';
import user from '../../data/user.json';
import data from '../../data/data.json';
import transaction from '../../data/transactions.json';
import { Statistic } from 'components/Statistics/Statistics.js';
import { FriendList } from 'components/FriendList/FriendList.js';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.js';
import { Title } from 'components/Statistics/Title.js';
import { GlobalStyle } from './GlobalStyle.styled.js';
import { SectionContainer } from 'components/Statistics/Statistic.styled.js';

export const App = () => {
  return (
    <Container>
      <Profile
        avatarSrc={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        quantityViews={user.stats.views}
        quantityLikes={user.stats.likes}
      />
      <SectionContainer>
      <Title title="Upload stats"/>
      <Statistic items={data} />
      </SectionContainer>
      <FriendList />
      <TransactionHistory items={transaction} />
      <GlobalStyle/>
    </Container>
  );
};
