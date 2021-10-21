const blogLinkName = document.querySelector('.blog-link');

const blogPostSolo = async (event) => {
    event.preventDefault();
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

// document
//   .querySelector
//   .addEventListener('click', blogPostSolo);