import React from "react";
import { ThemeProvider } from 'styled-components'

import FileUpload from "./components/FileUpload";

const colors = {
  back: '#F2F5F8',
  high: '#C3CBD5',
  warn: '#C64D32',
  title: '#495567',
  text: '#677489',
  link: '#3D485F',
  border: '#C7CDD3'
};

function App() {
  return (
    <ThemeProvider theme={colors}>
      <form >
        <FileUpload />
      </form>
    </ThemeProvider>
  );
}

export default App;
