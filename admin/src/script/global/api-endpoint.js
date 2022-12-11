import CONFIG from './config';

const API_ENDPOINT = {
  GET_ALL_PRODUCT: `${CONFIG.BASE_URL}/list`,
  ADD_PRODUCT: `${CONFIG.BASE_URL}/add`,
  REMOVE_PRODUCT: (id) => `${CONFIG.BASE_URL}/remove/${id}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/list/${id}`,
};

export default API_ENDPOINT;
