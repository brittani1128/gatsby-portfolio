import { graphql, useStaticQuery } from "gatsby";

const useGetPhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      gallery: allFile {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  return data.gallery.edges;
};

export default useGetPhotos;
