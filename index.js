const postsElement = document.getElementById("posts");
const subredditInput = document.getElementById("searchbar");
subredditInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchButton").click();
  }
});

const fetchSubreddit = async (subreddit) => {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    const data = json.data.children;
    data.sort(
      (a, b) => (a.data.score < b.data.score) - (a.data.score > b.data.score)
    );
    let links = `<h3><span class="scoreComments">Score Comments</span> Title</h3>`;
    data.forEach((element) => {
      links += `<li><span class="scoreComments">${element.data.score} ${element.data.num_comments} </span class="post"><a href="${element.data.url}" target="blank">${element.data.title}</a></li>`;
    });
    postsElement.innerHTML = `<ul>${links}</ul`;
  } catch (error) {
    console.error("Error: ", error);
  }
};
