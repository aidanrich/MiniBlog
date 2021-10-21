const blogLinkName = document.querySelector('.blog-link');
console.log("you've hitr mer")
const blogPostSolo = async () => {
 
  console.log("am I working?")
  const id = document.querySelector('.blog-num').innerHTML;
  console.log(id)
  if (id) {
    const response = await fetch(`/api/blogpost`, {
      method: 'GET',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (response.ok) {

      document.location.replace('/:id');
    } else {
      alert('Failed to post blog');
    }
  }
}


blogLinkName.addEventListener("click", () => {
  blogPostSolo();
});

const deleteButton = document.querySelector('#delete-button');

const deleteBlogPost = async () => {
  
console.log("you've clicked delete")
  const id = document.querySelector('.blog-num').innerHTML;

  if (id) {
    const response = await fetch(`/api/blogpost`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (response.ok) {

      document.location.replace('/');
    } else {
      alert('Failed to post blog');
    }
  }
}

deleteButton.addEventListener("click", () => {
  console.log("you've clicked delete TWCIE")

  deleteBlogPost();
});

// document
//   .querySelector
//   .addEventListener('click', blogPostSolo);