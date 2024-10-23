import bitcoinLogo from './assets/bitcoin.svg';
import ethereumLogo from './assets/ethereum.svg';
import litecoinLogo from './assets/litecoin.svg';
import rippleLogo from './assets/ripple.svg';
import cardanoLogo from './assets/cardano.svg';

const assets = [
  {
    name: 'Bitcoin',
    price: 26999,
    image: bitcoinLogo,  // Path to Bitcoin SVG
    color: '#F7931A', // Bitcoin Orange
  },
  {
    name: 'Ethereum',
    price: 1750,
    image: ethereumLogo,  // Path to Ethereum SVG
    color: '#3C3C3D', // Ethereum Dark Gray
  },
  {
    name: 'Litecoin',
    price: 65,
    image: litecoinLogo,  // Path to Litecoin SVG
    color: '#BEBEBE', // Litecoin Silver
  },
  {
    name: 'Ripple',
    price: 0.50,
    image: rippleLogo,  // Path to Ripple SVG
    color: '#346AA9', // Ripple Blue
  },
  {
    name: 'Cardano',
    price: 0.30,
    image: cardanoLogo,  // Path to Cardano SVG
    color: '#0033AD', // Cardano Blue
  },
];

export default assets;

