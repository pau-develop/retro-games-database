import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { Provider } from "react-redux";
import { store } from "store/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
