import React from "react";
import "./index.css"
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";
import fetchAlluser from "./aixosFile/axios"

const UserPage = (props) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.post("  https://5121-117-1-109-1.ngrok-free.app/API/post_method.php",{
            id:'5',
            name:'asndfiknasidfniansidfn',  
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
           }).then((response) => {
            setPost(response.data);
        });
    }, []);

    console.log(post);

     if (!post) return "No post!";

    return (

        <div>
            {/* {post[0].name} */}
            {post.name}
            {post.id}
        </div>

    )
}

export default UserPage;