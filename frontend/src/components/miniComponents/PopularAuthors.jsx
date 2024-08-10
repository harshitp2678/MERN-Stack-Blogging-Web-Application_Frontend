import axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const PopularAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);  // State to handle errors
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
       
        const { data } = await axios.get(
          "https://mern-stack-blogging-web-application-r8me.onrender.com/api/v1/blog/getPopularAuthors",
          { withCredentials: true }
        );

        if (data && data.authors) {
          setAuthors(data.authors);
        } else {
          throw new Error("No authors data found");
        }
      } catch (error) {
        console.error("Error fetching authors:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) {
    return <BeatLoader color="gray" size={30} />;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <section className="popularAuthors">
      <h3>Popular Authors</h3>
      <div className="container">
        {authors.length > 0 ? (
          authors.map((author) => (
            <div className="card" key={author._id}>
              <img src={author.authorAvatar} alt={`${author.authorName} avatar`} />
              <p>{author.authorName}</p>
              <p>{author.blogCount} Blogs</p> 
            </div>
          ))
        ) : (
          <p>No authors found.</p>
        )}
      </div>
    </section>
  );
};

export default PopularAuthors;
