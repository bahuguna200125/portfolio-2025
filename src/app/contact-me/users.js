 "use client";
 import Image from 'next/image';

 
 export default function User({id, name, email, phone}) {
      const imageLoader = ({ src }) => {
    return `./users/${src}.jpeg`; // Adjust the path as needed
  };
  return (
    <tr>
      <td> <Image src={String(id)} alt={name} width={100} height={0} loader={imageLoader} /></td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}