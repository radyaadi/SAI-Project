import API_ENDPOINT from '../global/api-endpoint';

class SAIDbSource {
  static async getAllProduct() {
    const response = await fetch(API_ENDPOINT.GET_ALL_PRODUCT);
    const responseJson = await response.json();
    return responseJson;
  }
  // eslint-disable-next-line lines-between-class-members
  static async detailProduct(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default SAIDbSource;
