import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./contexts/TransactionsContexts";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
            <Transactions />

      </TransactionsProvider>
   </ThemeProvider>
  )
}

export default App
