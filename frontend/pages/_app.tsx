import '../styles/globals.css';
import { ChakraProvider , ColorModeScript } from '@chakra-ui/react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Box, Flex } from '@chakra-ui/react';
import { ResearcherProvider } from '../context/ResearcherContext';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { BinanceTestnet } from "@thirdweb-dev/chains";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ThirdwebProvider
      activeChain={BinanceTestnet}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
    >
            <Flex flexDirection="column" minHeight="100vh">
              <Navbar />
              <Box flex="1">
                <ResearcherProvider>
                    <Component {...pageProps} />
                </ResearcherProvider>
              </Box>
              <Footer />
            </Flex>
      </ThirdwebProvider>
    </ChakraProvider>
  )
}

export default MyApp;
