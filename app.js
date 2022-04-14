import axios from "axios";

async function getData(id) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + users.id
  );
  console.log(users);
  console.log(posts);
}
export default getData;
