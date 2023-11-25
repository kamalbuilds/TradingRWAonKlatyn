import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    // Set active chain for app
    activeChain={{

      chainId: 1001, // Chain ID of the network
      // Array of RPC URLs to use
      rpc: ["https://public-en-baobab.klaytn.net"],

      // === Information for adding the network to your wallet (how it will appear for first time users) === \\
      // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
      nativeCurrency: {
        decimals: 18,
        name: "Klaytn Testnet",
        symbol: "KLAY",
      },
      shortName: "Klaytn Testnet", // Display value shown in the wallet UI
      slug: "klatyntestnet", // Display value shown in the wallet UI
      testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      chain: "Klaytn Testnet", // Name of the network
      name: "Klaytn Testnet", // Name of the network
    }}
    // Auth (SIWE) configuration
    authConfig={{
      domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "evmkit.com", // Your website domain
      authUrl: "/api/auth", // API Route (default is - pages/api/auth/[...thirdweb].ts)
    }}
  >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
