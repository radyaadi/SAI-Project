import CONFIG from './config';

const API_ENDPOINT = {
  GET_ALL_PRODUCT: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/list/${id}`,
};

export default API_ENDPOINT;
