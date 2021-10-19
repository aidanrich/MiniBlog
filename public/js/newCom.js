// const newCommentFunc = async (event) => {
//   event.preventDefault();

//   console.log("comment hit 2")

//   const mess_content = document.querySelector('.blog-comment').value.trim();
//   const blog_id = document.querySelector('.blog-num').innerHTML;

//     // blog_id = blog_id.toString()
//     // JSON.stringify({blog_id});
//     // blog_id = blog_id.replace(/<[^>]+>/g, '');

//   console.log(blog_id)
//   console.log(mess_content)

//   if (mess_content && blog_id) {

//     const response = await fetch(`/api/comments`, {
//       method: 'POST',
//       body: JSON.stringify({ mess_content, blog_id }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response)
//     if (response.ok) {

//     //   document.location.replace('/');
//     } else {
//       alert('Failed to post comment');
//     }
//   }
// }

// document
//   .querySelector('.comment-form')
//   .addEventListener('submit', newCommentFunc);