import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import GoogleSheetsProvider from "react-db-google-sheets";
import "./App.css";

const store = ConfigureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<GoogleSheetsProvider>
						<div className="App">
							<Main />
						</div>
					</GoogleSheetsProvider>
				</BrowserRouter>
			</Provider>
		);
	}
}
// test
export default App;
