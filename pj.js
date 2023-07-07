function showConfirmationModal() {
  document.getElementById("modal").style.display = "block";
}

function hideConfirmationModal() {
  document.getElementById("modal").style.display = "none";
}

function deletePost() {
  let postId = document.getElementById("postId").value;
  // Redirect to delete path with the postId
  window.location.href = "/board/delete?Id=" + postId;
}

function cancelDelete() {
  let postId = document.getElementById("postId").value;
  // Redirect to view path with the postId
  window.location.href = "/board/view?Id=" + postId;
}