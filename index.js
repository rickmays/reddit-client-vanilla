const postsElement = document.querySelector("#posts");
const subreddit = "javascript";

const fetchSubreddit = async (subreddit) => {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    const data = json.data.children;

    let links = `<h3><span class="scoreComments">Score Comments</span> Title</h3>`;
    data.forEach((element) => {
      console.log(element.data);
      links += `<li><span class="scoreComments">${element.data.score} ${element.data.num_comments} </span class="post"><a href="${element.data.url}" target="blank">${element.data.title}</a></li>`;
    });
    postsElement.innerHTML = `<ul>${links}</ul`;
  } catch (error) {
    console.log(`Error detected: ${error}`);
  }
};

fetchSubreddit(subreddit);
