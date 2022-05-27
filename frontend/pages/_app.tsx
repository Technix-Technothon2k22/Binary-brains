import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper, Store } from "../redux/Store";
import { ChakraProvider } from '@chakra-ui/react'

// import { Provider } from "react-redux";
import * as React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
          <Component {...pageProps} />
          </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
