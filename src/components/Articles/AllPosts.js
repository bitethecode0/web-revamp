import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../client.js';
import './AllPosts.css';

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);
 
  return (
    <div>
      <h2>Blog Posts</h2>
      <div className="blog-container">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div className="blog">
              <Link to={"/articles/" + post.slug.current} key={post.slug.current}>
                <div className="blog-header">
                  <img className="blog-header-image" src={post.mainImage.asset.url} alt="post image" />
                  <h3>{post.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
}
