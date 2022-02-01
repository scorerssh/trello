async function getBoors()
{
    let response =await fetch("https://api.trello.com/1/boards/{2}?key={36264967cdb14a5dc6a509bfda14da42}&token={ede4a3490af328d05c28d33d459e02bccdf7ac06657ecc13e9f2e44d367ec3e3}'");
    let data=await response.json();
    console.log(data);
    show(data);
    
}

function show(data)
{
        for (const item of data) {
            console.log(item);
        }
}
getBoors();