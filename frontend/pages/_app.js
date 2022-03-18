import "../styles/index.scss";
import StoreProvider from "../utils/store";
function Assessor({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default Assessor;
