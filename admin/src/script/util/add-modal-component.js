class AddModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="modal fade modal-lg" id="addProduct" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addProductLabel">Add Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group my-3 px-4">
                                <label for="inputBookId">Nama</label>
                                <input id="nama" type="text" class="form-control" placeholder="Nama" value = ""/>
                            </div>
                            <div class="form-group my-3 px-4">
                                <label for="inputBookId">Kategory</label>
                                <select class="form-select" aria-label="Default select example" id="kategori">
                                    <option selected>Bawang</option>    
                                    <option>Beras</option>
                                    <option>Bibit Tanaman</option>
                                    <option>Furniture</option>
                                    <option>Madu</option>
                                    <option>Minyak Goreng</option>
                                    <option>Pupuk</option>
                                    <option>Sandal</option>
                                </select>
                            </div>
                            <div class="form-group my-3 px-4">
                                <label for="inputBookId">Deskripsi</label>
                                <input id="deskripsi" type="text" class="form-control" placeholder="Deskripsi"/>
                            </div>
                            <div class="form-group my-3 px-4">
                                <label for="inputBookId">Harga</label>
                                <input id="harga" type="number" class="form-control" placeholder="Harga"/>
                            </div>
                            <div class="form-group my-3 px-4">
                                <label for="inputBookId">Stok</label>
                                <input id="stok" type="number" class="form-control" placeholder="Stok"/>
                            </div>
                            <div class="form-group my-3 px-4">
                                <label for="inputBookId">Gambar</label>
                                <input id="gambar" type="file" class="form-control" placeholder="Gambar"/>
                            </div>
                            <div class="form-group my-3 px-4">
                                <button type="submit" id="buttonAdd" class="btn btn-success" data-bs-dismiss="modal">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define('add-modal', AddModal);
