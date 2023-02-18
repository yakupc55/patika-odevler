import axios from "axios";

async function getUser (index){
    const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+index)
    const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+index)
    user["posts"]=posts
    console.log(user)
}

export default getUser;