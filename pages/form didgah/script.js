
const data = [{
    title: 'something',
    body: 'sample text',
   Auther:'Admin'
  }]
  
  const posts = document.getElementById('posts');
  
  data.map(el =>{
    const newItem = document.createElement('div');
    newItem.innerHTML = 
    ` <div class="m-3 posts">
    <label for="exampleFormControlTextarea1" class="form-label">${el.title}</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${el.body}</textarea>
  </div>`
   
              newItem.className= 'container';
              newItem.style = "border:none;"
              posts.appendChild(newItem)
  })
