import React, { useEffect, useState } from "react";
import axios from "axios";

const Inputfile = (props) => {
    const [post, setPost] = useState(null);
    const [formData, setFormData] = useState({
        name: ""
    });

    useEffect(() => {
        // Make sure to replace the endpoint with the actual API endpoint
        axios.post("https://0366-117-1-109-1.ngrok-free.app/API/ivymodasignup.php", formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((response) => {
            setPost(response.data);
        });
    }, [formData]);

    const handleInputChange = (e) => {
        setFormData({   formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add additional validation or data processing here before making the API call
    };

    if (!post) return "No post!";
    return (
        <div>
            <form method="post" action="ivymodasignup.php" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Inputfile;       