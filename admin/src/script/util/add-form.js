import SAIDbSource from '../data/saidb-source';

const addForm = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('form');

    // eslint-disable-next-line prefer-arrow-callback, func-names
    formContainer.addEventListener('submit', function (e) {
      e.stopPropagation();
      e.preventDefault();
      const inputname = document.querySelector('#nama').value;
      const inputdescription = document.querySelector('#deskripsi').value;
      const inputprice = document.querySelector('#harga').value;
      const inputstock = document.querySelector('#stok').value;
      const inputfile = document.querySelector('#gambar').files[0];

      const inpurCategory = document.querySelector('#kategori');
      // eslint-disable-next-line operator-linebreak
      const selectCategory =
        inpurCategory.options[inpurCategory.selectedIndex].text;

      const formData = new FormData();
      formData.append('name', inputname);
      formData.append('category', selectCategory);
      formData.append('description', inputdescription);
      formData.append('price', inputprice);
      formData.append('stock', inputstock);
      formData.append('file', inputfile);
      console.log(formData);
      SAIDbSource.addProduct(formData);
    });
  });
};

export default addForm;
