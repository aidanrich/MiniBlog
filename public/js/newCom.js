const newComment = document.querySelector('.under-comment-form')

const newCommentFunc = async () => {
  

  console.log("comment hit 2")

  const mess_content = document.querySelector('.blog-comment').value.trim();
  const blog_c_id = document.querySelector('.blog-num').innerHTML;

 console.log(blog_c_id)
  console.log(mess_content)

  // blog_c_id = blog_c_id.toString();
    // JSON.stringify({blog_id});
    // blog_id = blog_id.replace(/<[^>]+>/g, '');

   
 

  if (mess_content && blog_c_id) {

    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ mess_content, blog_c_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (response.ok) {

      document.location.replace('/');
    } else {
      alert('Failed to post comment');
    }
  }
}

newComment.addEventListener("submit", () => {
  console.log("new post click")
  newCommentFunc();
});

// document
//   .querySelector('.under-comment-form')
//   .addEventListener('submit', () => {
//     console.log("line 40 in newCom")
//     newCommentFunc()
//   });