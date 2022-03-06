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
        <img src={urlFor(postData.mainImage).width(320).url()} alt="" />
        <h2>{postData.title}</h2>
      </div>
      <div className="blog-content">
        <BlockContent
          blocks={postData.body}
          serializers={serializers}
          /* imageOptions={{ ratio: .8 }} */
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>


      <h4>{postData.name}</h4>
      <img src={urlFor(postData.authorImage).width(100).url()} alt="Author is June"/>
    </div>
  )
}
