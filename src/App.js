
import { Profile } from './components/Profile/Profile';
import user from './data/user.json'

import { Statistics } from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import { FriendList } from './components/Friends/FriendList';
import friends from './data/friends.json'

import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json'

function App() {
  return (
    <div className="App">
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div>
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <div>
        <Statistics stats={statisticalData}/>
      </div>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
      
    </div>
  );
}

export default App;
