import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from './Profile/profile.json';
import records from './Statistics/Statistics.json';
import friends from '../components/FriendList/friendList.json';
import FriendList from './FriendList/FriendList';
import transactions from './TransactionHistory/transactionHistory.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={data.avatar}
        username={data.username}
        tag={data.tag}
        location={data.location}
        stats={data.stats}
        // followers={data.stats.followers}
        // views={data.stats.views}
        // likes={data.stats.likes}
      />

      <Statistics title="Upload stats" stats={records} />
      <Statistics stats={records} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
