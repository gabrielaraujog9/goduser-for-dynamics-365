import { ThemeProvider } from 'styled-components'
import { theme } from './styles';
import { GlobalStyles, PagesWrapper } from './styles/global'
import { MemoryRouter as Router } from "react-router-dom";
import { RoutesComponent } from './routes';
import { Header } from "./components/Header"
//MemoryRouter
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <PagesWrapper>
          <Header/>
          <RoutesComponent/>
        </PagesWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
