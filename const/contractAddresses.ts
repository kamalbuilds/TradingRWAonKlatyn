// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Klatyn , KlatynTestnet} from "@thirdweb-dev/chains";

export const NETWORK = Klatyn;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x7708b64D9235603995C85702877371a796919DfF";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x6E9F7A4Ae15Af0c6601166cea08f08B3d1E8340D";

export const RENTNFT_COLLECTION_ADDRESS = "0x7e17031c3A75c670fb5dC22048437ED91d738927 ";

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://ftmscan.com/";
