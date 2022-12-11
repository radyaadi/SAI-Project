import SAIDbSource from '../../data/saidb-source';
import { test } from '../template/template-creator';
import UrlParser from '../../route/url-parser';

const DetailPage = {
  async render() {
    return `
    <section class="detail">
      <div class="product" id="product"></div>
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await SAIDbSource.detailProduct(url.id);
    const productContainer = document.querySelector('#product');
    productContainer.innerHTML = test(product);
  },
};

export default DetailPage;
