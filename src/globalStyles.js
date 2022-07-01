import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 

    :root{
        --dark-cyan: #0E8784; 
        --dark-grey-blue: #333D4B; 
        --pale-orange: #FDD6BA;  
        --light-cream: #FEFCF7; 
        --grey: #83888F;
    }

    body{
        margin: 0; 
        padding: 0;
        font-family: 'Fraunces', serif;
        box-sizing: border-box;
        background-color: var(--light-cream);
    }  

    h1, h2, h3{
      color: var(--light-cream);
      font-weight: 900;
      text-align: center;
      margin: 0;
    } 
`;

export const Container = styled.div`
  width: 86%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const globalColors = {
  darkCyan: "#0E8784",
  darkGreyBlue: "#333D4B",
  paleOrange: "#FDD6BA",
  lightCream: "#FEFCF7",
  grey: "#83888F",
};
