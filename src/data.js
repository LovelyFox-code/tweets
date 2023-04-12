// Search for Tweets within the past seven days
// https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search

const endpointUrl =
  "https://api.twitter.com/2/tweets/search/recent?expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text&query=from:SAEIMEDIA lang:en";

export async function getRequest() {
  const params = {
    query: "from:SAEIMEDIA lang:ar",
  };

  const res = await fetch(endpointUrl, {
    mode: "no-cors",
    method: "GET",
    headers: {
      "User-Agent": "v2RecentSearchJS",
      authorization: "",
    },
  });

  if (res.body) {
    return res.body;
  } else {
    throw new Error("Unsuccessful request");
  }
}
