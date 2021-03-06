  
import React from "react";
import { Global, css, connect } from "frontity";

// sk-dev: WEBFONTS REFINE/STANDARD
// https://community.frontity.org/t/frontity-release-4-november-2019/795
/* only include latin for now */

// GF v1 CDN URL:
// https://fonts.googleapis.com/css?family=
// Abril+Fatface|
// Amatic+SC|
// Comfortaa|
// Hepta+Slab|
// Pacifico|
// Playfair+Display:700|Slabo+27px
// 'Playfair Display', Georgia, cursive;

// sk-dev: will there be support for variable ttf fonts?
// https://web.dev/variable-fonts/
// https://web.dev/fast/#optimize-web-fonts
// https://medium.com/@wanjarunkel/using-bootstraps-new-responsive-font-sizes-feature-57abacd595ac


// Import your own font files.

/* 300/500/600/700 = thin/regular/semibold/bold 300 body weight*/
import comfortaaThin from "../../fonts/comfortaa/comfortaa-v29-latin-300.woff2";
import comfortaa from "../../fonts/comfortaa/comfortaa-v29-latin-regular.woff2";
import comfortaaSemiBold from "../../fonts/comfortaa/comfortaa-v29-latin-600.woff2";
import comfortaaBold from "../../fonts/comfortaa/comfortaa-v29-latin-700.woff2";

/*  = regular/semibold/heavy - theses are headers so not used 500 for normal */
import heptaSlab from "../../fonts/hepta-slab/hepta-slab-v7-latin-500.woff2";
import heptaSlabBold from "../../fonts/hepta-slab/hepta-slab-v7-latin-700.woff2";
import heptaSlabBlack from "../../fonts/hepta-slab/hepta-slab-v7-latin-900.woff2";

import amatic from "../../fonts/amatic-sc/amatic-sc-v13-latin-regular.woff2";
import amaticBold from "../../fonts/amatic-sc/amatic-sc-v13-latin-700.woff2";

import playfair from "../../fonts/playfair-display/playfair-display-v20-latin-500.woff2";
import playfairBold from "../../fonts/playfair-display/playfair-display-v20-latin-700.woff2";
import playfairBlack from "../../fonts/playfair-display/playfair-display-v20-latin-900.woff2";

import slabo from "../../fonts/slabo27px/slabo-27px-v6-latin-regular.woff2";
import abrilFatface from "../../fonts/abril-fatface/abril-fatface-v11-latin-regular.woff2";

const FontFace = ({ state }) => {
  let fonts = null;
  let fontDisplay = "swap";
  switch (state.theme.fontSets) {
    //case "us-ascii":
    //  fonts = [ /*InterMediumUS, InterSemiBoldUS, InterBoldUS */ heptaSlab ];
    //  fontDisplay = "block";
    //  break;
    case "latin":
      fonts = [ heptaSlab, heptaSlabBold, heptaSlabBlack, amatic, amaticBold, playfair, playfairBold, playfairBlack, comfortaa, slabo, abrilFatface ];
      break;
    default:
      fonts = [ heptaSlab, heptaSlabBold, heptaSlabBlack, amatic, amaticBold, playfair, playfairBold, playfairBlack, comfortaa, slabo, abrilFatface ];
  }

  /* 
  untested / issues with webfont display 

          @media screen and (-webkit-min-device-pixel-ratio:0) {
          @font-face {
            font-family: "Hepta Slab";
            font-style: normal;
            font-weight: 500;
            src: url(${fonts[0]+"SVG"}) format("svg");
            font-display: ${fontDisplay};
          }}

  */

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Hepta Slab";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[0]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Hepta Slab";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[1]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Hepta Slab";
          font-style: normal;
          font-weight: 900;
          src: url(${fonts[2]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Amatic SC";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[3]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Amatic SC";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[4]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Playfair Display";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[5]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Playfair Display";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[6]}) format("woff2");
          font-display: ${fontDisplay};
        }
        @font-face {
          font-family: "Playfair Display";
          font-style: normal;
          font-weight: 900;
          src: url(${fonts[7]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Comfortaa";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[8]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Slabo 27px";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[9]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Pacifico";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[10]}) format("woff2");
          font-display: ${fontDisplay};
        }

      `}
    />
  );
};

export default connect(FontFace);