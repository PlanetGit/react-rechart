import axios from 'axios';

const getMultifirm = async () => {
  const result = await axios.get(`https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/ETH_Convex_steth`);
  return result.data;
}

const numberFormatter = (num: number) => {
  if (num > 1000000000) {
    return (num / 1000000000).toString() + 'B';
  } else if (num > 1000000) {
    return (num / 1000000).toString() + 'M';
  } else if (num > 1000) {
    return (num / 1000).toString() + 'K';
  } else {
    return num.toString();
  }
}

export { getMultifirm, numberFormatter };