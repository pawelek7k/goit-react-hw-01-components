import user from "../user.json";
import "./App.css";
import { UserProfile } from "./Profile/UserProfile";

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
    </>
  );
}

export default App;
