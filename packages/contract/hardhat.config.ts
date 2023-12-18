import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox-viem';

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  // networks: {
  //   sepolia: {
  //     url: process.env.HARDHAT_NETWORKS_URL,
  //     accounts: [process.env.PRIVATE_SEPOLIA_ACCOUNT_KEY as string],
  //   },
  // },
  paths: {
    artifacts: '../client/src/libs/hardhat/artifacts' && './types',
  },
};

export default config;
