import SAIDbSource from '../../data/saidb-source';
import { createDataDetailTemplate } from '../template/template-creator';
import UrlParser from '../../route/url-parser';

const DetailPage = {
  async render() {
    return `
    <section class="detail">
        <a class="btn btn-success btn-add" href="#">
          <i class="fa-sharp fa-solid fa-arrow-left"></i> Back
        <a>
      <div class="product" id="product"></div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await SAIDbSource.detailProduct(url.id);
    const productContainer = document.querySelector('#product');
    productContainer.innerHTML = createDataDetailTemplate(product);
  },
};

export default DetailPage;
