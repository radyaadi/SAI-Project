// import CONFIG from '../../global/config';

const createProductItemTemplate = (product) => `
    <div class="card">
        <img src="${product.imgUrl}" class="card-img" alt="${product.name}" />
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-category">${product.category} (${product.stock} pcs)</p>
            <p class="card-text">${product.description}</p>
            <div class="btn-container">
                <a href="#/detail/${product.id}" class="btn btn-primary btn-detail">Lihat Detail</a>
            </div>
        </div>
    </div>
`;

const createProductDetailTemplate = (product) => `
  <h2 class="product__title">${product.name}</h2>
  <img class="product__poster" src="${product.imgUrl}" alt="${product.name}" />
  <div class="product__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${product.category}</p>
    <h4>Duration</h4>
    <p>${product.price} minutes</p>
    <h4>Rating</h4>
    <p>${product.stock}</p>
  </div>
  <div class="product__overview">
    <h3>Overview</h3>
    <p>${product.description}</p>
  </div>
`;

const test = (product) => `
<h2 class="detail-title">${product.name}</h2>
<div class="detail-container">
  <div class="detail-header">
    <div class="detail-image">
      <img src="${product.imgUrl}" alt="${product.name}" />
    </div>
    <div class="detail-info">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" colspan="2">Informasi Produk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nama</td>
            <td>${product.name}</td>
          </tr>
          <tr>
            <td>Kategori</td>
            <td>${product.category}</td>
          </tr>
          <tr>
            <td>Harga</td>
            <td>${product.price}</td>
          </tr>
          <tr>
            <td>Stok</td>
            <td>${product.stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="detail-footer">
    <h5 class="detail-title">Deskrisi Produk</h5>
    <p>${product.description}</p>
  </div>
</div>
`;

// eslint-disable-next-line import/prefer-default-export
export { createProductItemTemplate, createProductDetailTemplate, test };
