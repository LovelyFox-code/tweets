import { useEffect, useState } from "react";

function TimeLineTweets() {
  const [tweets, setTweets] = useState([]);
  const [media, setMedia] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/twitter-feed`).then(async (response) => {
      const body = await response.json();
      setTweets(body.dataFeed.data);
      setMedia(
        body.dataFeed.includes.media.map((med) => med.preview_image_url)
      );
    });
  }, []);

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
        <img src={media} alt="media" />
      </div>
    </div>
  );
}

export default TimeLineTweets;
