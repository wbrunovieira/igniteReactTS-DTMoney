import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
   </ThemeProvider>
  )
}

export default App
