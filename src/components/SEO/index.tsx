// lib
import { Helmet } from "react-helmet";

type Props = {
  title: string;
  description: string;
  keywords: string[];
  ogType: string;
  ogImageURL: string;
};

const SEO = (props: Props) => {
  // title
  const pageTitle: string = `Snaki | ${props.title}`;

  return (
    <Helmet>
      <meta charSet="UTF-8" />

      <title>{pageTitle}</title>

      <meta name="author" content="Syed Vilayat Ali Rizvi" />
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords.join(", ")} />

      <meta
        property="og:title"
        content={`${props.title}: A React App - Featuring Snake Game Where Snake's Body is a Linked List!`}
      />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={"http://localhost:5173"} />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:type" content={props.ogType} />
      <meta property="og:image" content={props.ogImageURL} />
    </Helmet>
  );
};

export default SEO;
