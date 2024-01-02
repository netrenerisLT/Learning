const loadCommentsBtn = document.getElementById("load-comments-btn");
const commentsSection = document.getElementById("comments");
const commentsFormSubmit = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentsList(comments) {
  const commentList = document.createElement("ol");
  for (const comment of comments) {
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
    <article class="comment-item">
  <h2>${comment.title}</h2>
  <p>${comment.text}</p>
</article>
    `;
    commentList.appendChild(commentElement);
  }
  return commentList;
}

async function fetchCommentsForPost() {
  const postId = loadCommentsBtn.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const data = await response.json();

  if (data && data.length > 0) {
    const fetchedComments = createCommentsList(data);
    commentsSection.innerHTML = "";
    commentsSection.appendChild(fetchedComments);
  } else {
    commentsSection.firstElementChild.textContent =
      "we didn't find any comments";
  }
}

async function saveComment(event) {
  event.preventDefault();
  const postId = commentsFormSubmit.dataset.postid;
  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;
  const comment = {
    title: enteredTitle,
    text: enteredText,
  };

  const response = await fetch(`/posts/${postId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  fetchCommentsForPost();
}

loadCommentsBtn.addEventListener("click", fetchCommentsForPost);
commentsFormSubmit.addEventListener("submit", saveComment);
