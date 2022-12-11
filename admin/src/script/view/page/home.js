// eslint-disable-next-line no-unused-vars
import SAIDbSource from '../../data/saidb-source';
import { createProductItemTemplate } from '../template/template-creator';
import '../../util/add-modal-component';

const HomePage = {
  async render() {
    return `
      <button type="button" class="btn btn-success btn-add" data-bs-toggle="modal" data-bs-target="#addProduct">
        <i class="fa-sharp fa-solid fa-plus"></i> Add Product
      </button>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="product-list"></tbody>
        </table>
      </div>
    `;
  },

  async afterRender() {
    const products = await SAIDbSource.getAllProduct();
    const productContainer = document.querySelector('#product-list');
    products.forEach((product) => {
      productContainer.innerHTML += createProductItemTemplate(product);
      const deleteButtons = document.querySelectorAll('.btn-delete');
      deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const productId = event.target.id;
          SAIDbSource.removeProduct(productId);
        });
      });
    });
  },
};

export default HomePage;
