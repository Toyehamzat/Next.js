export default async function GetUser(userId:string){
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!res.ok) throw new Error("Could not fetch user");
  return res.json();
}
