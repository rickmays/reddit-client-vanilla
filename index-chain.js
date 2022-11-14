const entriesEl = document.querySelector("#posts");
const subreddit = "javascript";

const fetchSubreddit = (subreddit) => {
  if (subreddit) {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => response.json())
      .then((json) => {
        let links = "";
        for (let i = 0; i < json.data.children.length; i++) {
          links += `<li><a href="${json.data.children[i].data.url}">${json.data.children[i].data.title}</a></li>`;
        }
        entriesEl.innerHTML = `<ul>${links}</ul`;
      });
  }
};

fetchSubreddit(subreddit);
