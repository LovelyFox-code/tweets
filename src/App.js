import { useEffect, useState } from "react";
import "./App.css";
import RecentTweets from "./components/RecentTweets";
import TimeLineTweets from "./components/Timeline";

function App() {
  return (
    <div className="tweet_wrap">
      <RecentTweets />
      <TimeLineTweets />
    </div>
  );
}

export default App;
