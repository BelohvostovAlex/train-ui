import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@1,300&family=Inter:wght@300;400;600;700&family=Nunito+Sans:ital,wght@0,300;0,400;0,700;1,300&family=Poppins:wght@300;400;500;600;700&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #BDBDBD;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #D98639;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
