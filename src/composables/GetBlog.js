import axios from "axios"


const Blogs = () => {

  const getBlog = async () => {

    try {
      const response = await axios.get("http://localhost:3000/posts");
      return response;
    } catch (err) {

      return err;
    }
};

const postBlog = async (data) => {

    try {
      const response = await axios.post("http://localhost:3000/posts", data);
      return response;
    } catch (err) {

      return err;
    }
};




    return {
      
        getBlog,
        postBlog

    }
};

export default Blogs;