/* eslint-disable arrow-body-style */
import API_ENDPOINT from '../global/api-endpoint';

class SAIDbSource {
  static async getAllProduct() {
    const response = await fetch(API_ENDPOINT.GET_ALL_PRODUCT);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailProduct(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addProduct(formData) {
    const options = {
      method: 'POST',
      body: formData,
    };
    const response = await fetch(`${API_ENDPOINT.ADD_PRODUCT}`, options);
    const responseJson = await response.json();
    return alert(responseJson.msg);
  }

  static async removeProduct(id) {
    fetch(`${API_ENDPOINT.REMOVE_PRODUCT(id)}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson.msg;
      })
      .catch((error) => {
        return error;
      });
  }
}

export default SAIDbSource;
