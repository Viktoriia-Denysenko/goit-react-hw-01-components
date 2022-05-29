import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from './Profile/Profile.json';
import records from './Statistics/Statistics.json';
import friends from '../components/FriendList/FriendList.json';
import FriendList from './FriendList/FriendList';
import transactions from './TransactionHistory/TransactionHistory.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  // const isOnline = true;

  return (
    <div>
      <Profile
        avatar={data.avatar}
        username={data.username}
        tag={data.tag}
        location={data.location}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      />

      <Statistics title="Upload stats" stats={records} />
      <Statistics stats={records} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
