export default async function GetUserPost(userId:string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  
    if (!res.ok) throw new Error("Could not fetch user");
    return res.json();
  }
  