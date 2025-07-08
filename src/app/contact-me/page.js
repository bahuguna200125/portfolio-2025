// import User from "./users";

// async function getData() {
//   const res= await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }
 
// export default async function ContactPage() {
//   const users = await getData();

//   return (
//     <main className="text-center p-4">
//       <h1 className="text-3xl">Contact</h1>
//       <p>Here are some of the projects I've worked on:</p>
//       <table className="mx-auto mt-4">
//         <thead>
//           <tr>
//             <th>img</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
          
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <User key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} />
//           ))}
//         </tbody>
//       </table>
//     </main>
//   );
// }
export default function ContactMe() {
  async function submitForm(formData) {
    "use server";
    const formFields = {

      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Form submitted:", formFields);
    console.log(
      "TODO: send these form fields to your backend "
    )

    return formFields;
  }
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-[var(--background)] via-[var(--primary)]/10 to-[var(--background)]">
      <div className="w-full max-w-4xl rounded-3xl shadow-2xl p-0 md:p-1 bg-white/70 dark:bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border)]">
        <div className="flex flex-col items-center gap-10 p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--primary)] leading-tight drop-shadow-sm">
            Contact Me
          </h1>
          <p className="text-base md:text-lg text-[var(--secondary)] leading-relaxed">
            Feel free to reach out for collaborations, inquiries, or just a friendly chat!
          </p>

        </div>
        <form className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md "action={submitForm} >
          <div className="mb-4">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
            <div className="mt-2 mb-6">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
              name="message"
              rows="1"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
