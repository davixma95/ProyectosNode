// import FetchData from './components/fetchdata.jsx/FetchData';
// import LoginPage from './pages/LoginPage';
import AuthProvider from './providers/Auth.provider';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
const App = () => {
	return (
		<>
			<GlobalStyles/>
			<AuthProvider>
				<BrowserRouter>
					<Router/>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
};

export default App;