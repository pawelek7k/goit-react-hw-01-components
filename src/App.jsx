import data from "../json/data.json";
import user from "../json/user.json";
import "./App.css";
import { UserProfile } from "./components/Profile/UserProfile";
import { Statistics } from "./components/Statistics/Statistics";

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
    </>
  );
}

export default App;
