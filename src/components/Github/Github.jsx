import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/codeanubhav")
//       .then((Response) => Response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-orange-600 text-white p-5 text-3xl">
      Github Follower : {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

export const githubloaderinfo = async ()=>{
    const response = await fetch('https://api.github.com/users/codeanubhav')
    return response.json();
}
