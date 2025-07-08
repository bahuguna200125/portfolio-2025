import User from "./users";

async function getData() {
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}
 
export default async function ContactPage() {
  const users = await getData();

  return (
    <main className="text-center p-4">
      <h1 className="text-3xl">Contact</h1>
      <p>Here are some of the projects I've worked on:</p>
      <table className="mx-auto mt-4">
        <thead>
          <tr>
            <th>img</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <User key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

