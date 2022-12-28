//lib
import { Fragment } from "react";

// components
import SEO from "../../components/SEO";

const AboutPage = () => {
  return (
    <Fragment>
      {/* Page SEO */}
      <SEO
        title="About"
        description="Description"
        keywords={[
          "Syed Vilayat Ali Rizvi",
          "vilayatcodemysite@gmail.com",
          "Vilayat's Project",
          "Vilayat's React Skills",
          "create-react-app",
          "React developer",
          "TypeScript-React Developer",
          "game mechanics",
          "developer's blog",
          "react dev blog",
          "tutorial",
          "concept",
          "data structure tutorial",
          "algorithm explanation",
        ]}
        ogType={"website"}
        ogImageURL="https://www.github.com/Vilayat-Ali.png"
      />
      {/* Page SEO */}
    </Fragment>
  );
};

export default AboutPage;
