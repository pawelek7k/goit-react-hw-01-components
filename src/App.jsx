import data from "../json/data.json";
import friends from "../json/friends.json";
import transactions from "../json/transactions.json";
import user from "../json/user.json";
import "./App.css";
import { FriendsList } from "./components/FriendList/FriendList";
import { UserProfile } from "./components/Profile/UserProfile";
import { Statistics } from "./components/Statistics/Statistics";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <FriendsList friends={friends} />
      <TransactionHistory
        id={transactions.id}
        currency={transactions.currency}
        type={transactions.type}
        amount={transactions.type}
      />
    </>
  );
}

export default App;
