import React, { useState } from "react";
// import styled from "styled-components/macro";

import { Box, Image, SectionWrapper, Typography } from "components";
import { useQuery } from "styles/breakpoints";
import { Breakpoints } from "styles/theme";
import { StaticImage } from "gatsby-plugin-image";
import { theme } from "styles/theme";
// import { ThemeProvider } from "styled-components/macro";

type People = "Viktorija" | "Vidmis" | "Martyna" | "Nojus"; //NOTE: Type might be not only strings

enum Foods {
  GRYBAI = "grybukai",
  BURGERIUKAI = "burgeriuksai",
  CEPAI = "cepelinai",
  SALDUMYNAI = "sokoladai",
}

//NOTE: if we do not pass any value for enum, then it automatically will add a number value starting from 0
// enum FoodsEnum {
// 	GRYBAI,
// 	BURGERIUKAI,
// 	CEPAI,
// 	SALDUMYNAI,
// }

interface Foodies {
  id: number;
  name: People;
  food: Foods;
}

interface FoodiesExt extends Foodies {
  hateFood?: string; //NOTE: ? means optional
}

const FOODS: FoodiesExt[] = [
  {
    id: 1,
    name: "Viktorija",
    food: Foods.GRYBAI,
  },
  {
    id: 2,
    name: "Vidmis",
    food: Foods.BURGERIUKAI,
  },
  {
    id: 3,
    name: "Martyna",
    food: Foods.SALDUMYNAI,
  },
  {
    id: 4,
    name: "Nojus",
    food: Foods.CEPAI,
  },
];

const Home: React.FC = () => {
  //NOTE: React.FC means functional React component
  const a = true;
  const [data, setData] = useState(0); //NOTE: TS automatically adds a type to initial value

  const b = [10]; //NOTE: TS automatically adds a type to initial value
  const c = [10];
  console.log(Breakpoints, "this is breakpoints");
  // console.log(Foods.BURGERIUKAI);

  const arrayjus2: Array<string | number> = ["1", 2]; //NOTE: Generic type
  const arrayjus: (string | number)[] = ["2", "1", 3, 2]; //NOTE: primitive type

  const { isMobile } = useQuery();

  return (
    //NOTE: THIS ISNT A GOOD PRACTICE. WE WILL CREATE A FILE, FOR PROVIDERS.
    // <ThemeProvider theme={theme}>
    <SectionWrapper>
      <Box
        backgroundColor={{
          _: "primary",
          ltablet: "primary",
        }}
        minHeight={isMobile ? "50%" : "100vh"}
        minWidth="100vw"
      >
        <Typography type="h1" textAlign="center">
          fooood
        </Typography>
        <Image src="gatsbyImg" maxHeight="6.25rem" />
        {/* arba toki arba toki staticas sunku su sarasu dideliu del didelio masto (staticImage)*/}
        <StaticImage
          src="../../assets/images/image.png"
          alt="foto"
          placeholder="tracedSVG"
          draggable="false"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}
        />
        {/* {FOODS.map(({id,name,food}=>
            <Box key={id}>
              <Typography color='accent'>
                {name} loves {food}
              </Typography>
            </Box>
          
          ))} */}
      </Box>
    </SectionWrapper>
    // </ThemeProvider>
  );
};

export default Home;
