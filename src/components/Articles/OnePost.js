import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import sanityClient from '../../client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import './OnePost.css';
import Figure from './Figure';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (src) => builder.image(src);

const serializers = {
  types: {
    image: Figure
  }
};
export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => {
        setPostData(data[0]);
        console.log(data)
      })
      .catch(console.error);
  }, [slug]);

  if (!postData) { return <div>Loading...</div> };

  return (
    <div className="content-wrapper">
      <div className="blog-header">
        {/* <img src={urlFor(postData.mainImage).width(320).url()} alt="" /> */}
        <img src={urlFor(postData.mainImage).url()} alt="" className="blog-header-image" />
        <h2>{postData.title}</h2>
      </div>
      <div className="blog-content">
        <BlockContent
          blocks={postData.body}
          serializers={serializers}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>


      <div className="author">
        <div className="author-image">
        <img src={urlFor(postData.authorImage).width(200).height(200).url()} alt="Author is June"/>
        </div>
        <div className="author-bio">
          <h3>{postData.name}</h3>
          <br/>
          <h4>Love to reverse engineer complex stuff</h4>
          <ul>
            <li>Web</li>
            <li>Software Engineering</li>
            <li>Distributed Systems</li>
            <li>Data Structures and Algorithms</li>
          </ul>          
          <br/>
        </div>
      </div>
    </div>
  )
}
