import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../client.js';

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
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/articles/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img src={post.mainImage.asset.url} alt="post image" />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
