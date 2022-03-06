import React from "react";
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../client.js';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (src) => builder.image(src);

const Figure = ({ node: { asset } }) => (
  <picture>
    <source
      type="image/webp"
      srcSet={`${urlFor(asset)
        .width(200)
        .format("webp")
        .url()} 200w,
              ${urlFor(asset)
                .width(400)
                .format("webp")
                .url()} 400w,
              ${urlFor(asset)
                .width(800)
                .format("webp")
                .url()} 800w`}
      sizes="(max-width: 800px) 100vw, 800px"
    />
    <source
      type="image/webp"
      srcSet={`${urlFor(asset)
        .width(200)
        .url()} 200w,
              ${urlFor(asset)
                .width(400)
                .url()} 400w,
              ${urlFor(asset)
                .width(800)
                .url()} 800w`}
      sizes="(max-width: 800px) 100vw, 800px"
    />
    <img
      sizes="(max-width: 800px) 100vw, 800px"
      srcSet={`${urlFor(asset)
        .width(200)
        .url()} 200w,
              ${urlFor(asset)
                .width(400)
                .url()} 400w,
              ${urlFor(asset)
                .width(800)
                .url()} 800w`}
      src={urlFor(asset)
        .width(800)
        .url()}
      alt="Missing alt text"
      loading="lazy"
    />
  </picture>
);

export default Figure;
