import sanityClient from "@sanity/client";
export default sanityClient({
  projectId: "zs1hmjkw",
  dataset: "production",
  useCdn: true,
});
