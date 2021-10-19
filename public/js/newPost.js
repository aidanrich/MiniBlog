const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();

    if (name && content) {
        console.log("got em")
        const response = await fetch(`/api/blogpost`, {
            method: 'POST',
            body: JSON.stringify({ name, content }),
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

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);