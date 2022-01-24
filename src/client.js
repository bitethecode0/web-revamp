import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "hhqox89l",
  dataset: "production",
  useCdn: true,
});
