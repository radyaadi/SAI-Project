const createProductItemTemplate = (product) => `
  <tr>
    <td>${product.name}</td>
    <td>${product.category}</td>
    <td>${product.price}</td>
    <td>${product.stock}</td>
    <td>
      <div class="action">
        <a class="btn-action btn-view" title="view" id="${product.id}" href="#/detail/${product.id}"><i class="fa-sharp fa-solid fa-eye"></i></a>
        <a class="btn-action btn-delete" title="delete" id="${product.id}" onClick="window.location.reload()"><i class="fas fa-trash"></i></a>
      </div>
    </td>
  </tr>
`;

const createDataDetailTemplate = (product) => `
<div class="table-responsive">
  <table class="table table-striped table-bordered tabel-detail">
    <thead>
      <tr>
        <th scope="col">Detail</th>
        <th scope="col">Keterangan</th>
      </tr>
    </thead>
    <tbody id="product-list">
      <tr>
        <td>Nama</td>
        <td>${product.name}</td>
      </tr>
      <tr>
      <tr>
        <td>Gambar</td>
        <td><img src="${product.imgUrl}" alt="${product.name}"></td>
      </tr>
      <tr>
        <td>Kategori</td>
        <td>${product.category}</td>
      </tr>
      <tr>
        <td>Deskripsi</td>
        <td>${product.description}</td>
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
;`;

export { createProductItemTemplate, createDataDetailTemplate };
