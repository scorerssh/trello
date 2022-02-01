async function getBoors()
{
    let response =await fetch("https://api.trello.com/1/boards/{2}?key={36264967cdb14a5dc6a509bfda14da42}&token={ede4a3490af328d05c28d33d459e02bccdf7ac06657ecc13e9f2e44d367ec3e3}'");
    let data=await response.json();
    console.log(data);
    show(data);
    
}

<<<<<<< HEAD
 function delete()
 {
    fetch('http://example.com/movies.json',
    {
        method:'DELETE'
    })
 }

 function productDisplay()
 {
    
 }
 

 
=======
function show(data)
{
        for (const item of data) {
            console.log(item);
        }
}
getBoors();
>>>>>>> 254b5d25b4a478f87f53f611a9b39f66fd86c934
