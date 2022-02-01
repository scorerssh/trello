fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

function post()
 {
    fetch('http://example.com/movies.json',
    {
        method:'POST',
        body:JSON.stringify({
            title:'postTitle',
            body:'postBody',
            userId:'0'
        }),
        Headers:{
            "Content-type":"application/json; charset:UTF-8"
        },
    })
    .then(res => res.json())
    .then(data=> console.log(data));
    
 }

 function put()
 {
    fetch('http://example.com/movies.json',
    {
        method:'PUT',
        body:JSON.stringify({
            title:'putTitle',
            body:'putBody',
            userId:'1'
        }),
        Headers:{
            "Content-type":"application/json; charset:UTF-8"
        },
    })
    .then(res=> res.json())
    .then(data=>console.log(data));
 }

 function delete()
 {
    fetch('http://example.com/movies.json',
    {
        method:'DELETE'
    })
 }
