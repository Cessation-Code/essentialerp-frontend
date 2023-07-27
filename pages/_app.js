// app.js
import '../styles/globals.css';
import 'typeface-poppins';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
