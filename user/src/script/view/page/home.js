import SAIDbSource from '../../data/saidb-source';
import { createProductItemTemplate } from '../template/template-creator';

const HomePage = {
  async render() {
    return `
    <section class="home">
      <div class="text-box">
        <h2>SAI Store</h2>
        <p>
          Cukupi kebutuhan sehari - hari anda dengan berbelanja di SAI Store, tempatnya orang sukses belanja!
        </p>
        <div class="btn-container">
          <a href="#content" class="btn-content">Produk</a>
        </div>
      </div>
      <div class="img-box">
        <img src="./beras.png" alt="" />
        <div class="circle"></div>
      </div>
    </section>
    <section class="content" id="content">
      <div class="title">
        <h2 class="title-text"><span>SAI</span> Produk</h2>
        <p>Kami menyediakan barang keperluan untuk anda</p>
      </div>
      <div class="products" id="products"></div>
    </section>
    `;
  },

  async afterRender() {
    const products = await SAIDbSource.getAllProduct();
    const productContainer = document.querySelector('#products');
    products.forEach((product) => {
      productContainer.innerHTML += createProductItemTemplate(product);
    });
  },
};

export default HomePage;
