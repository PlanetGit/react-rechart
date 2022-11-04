import axios from 'axios';

const getMultifirm = async () => {
  const result = await axios.get(`https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/ETH_Convex_steth`);
  return result.data;
}

export default getMultifirm;