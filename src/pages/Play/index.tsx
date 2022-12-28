//lib
import { Fragment } from "react";

// components
import SEO from "../../components/SEO";

type Props = {};

const index = (props: Props) => {
  return (
    <Fragment>
      {/* Page SEO */}
      <SEO
        title="Home"
        description="Description"
        keywords={[
          "snake-game",
          "nokia-snake-game",
          "nokia",
          "arcade game",
          "crypto gaming",
          "indie game",
          "browser game",
        ]}
        ogImageURL="https://www.github.com/Vilayat-Ali.png"
      />
      {/* Page SEO */}
    </Fragment>
  );
};

export default index;
