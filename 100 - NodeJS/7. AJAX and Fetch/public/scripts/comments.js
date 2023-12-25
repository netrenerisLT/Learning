const loadCommentsBtn = document.getElementById("load-comments-btn");
const commentsSection = document.getElementById("comments");

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

  const fetchedComments = createCommentsList(data);
  commentsSection.innerHTML = "";
  commentsSection.appendChild(fetchedComments);
}

loadCommentsBtn.addEventListener("click", fetchCommentsForPost);
