import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tweets, setTweets] = useState([]);
  const [media, setMedia] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/get-tweets`).then(async (response) => {
      const body = await response.json();
      setTweets(body.data.data);
      setMedia(body.data.includes.media.map((med) => med.preview_image_url));
    });
  }, []);
  console.log(tweets.map((tweet) => tweet.id));
  return (
    <div className="tweet_wrap">
      <h1>Tweets:</h1>
      {tweets.map((tweet) => (
        <div>
          <h1 className="tweet_header">ID: {tweet.id}</h1>
          <p className="tweet_wrap">TEXT: {tweet.text}</p>
        </div>
      ))}
      <div className="tweet_img_wrap">
        <img src={media}></img>
      </div>
    </div>
  );
}

export default App;
