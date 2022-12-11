import product from '../models/productModel.js';
import path from 'path';
import fs from 'fs';

export const getAllProducts = async (req, res) => {
  try {
    const response = await product.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const addProduct = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: 'No File Uploaded' });

  //data
  const { name, category, description, price, stock } = req.body;

  //img
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  const allowedType = ['.png', '.jpg', '.jpeg'];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: 'Invalid Images' });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: 'Image must be less than 5 MB' });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await product.create({
        name: name,
        category: category,
        description: description,
        price: price,
        stock: stock,
        image: fileName,
        imgUrl: url,
      });
      res.status(201).json({ msg: 'Product Created Successfuly' });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProduct = async (req, res) => {
  const tempProduct = await product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!tempProduct) return res.status(404).json({ msg: 'No Data Found' });

  let fileName = '';
  if (req.files === null) {
    fileName = tempProduct.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: 'Invalid Images' });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: 'Image must be less than 5 MB' });

    const filepath = `./public/images/${tempProduct.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  //data
  const { name, category, description, price, stock } = req.body;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;

  try {
    await product.update(
      {
        name: name,
        category: category,
        description: description,
        price: price,
        stock: stock,
        image: fileName,
        imgUrl: url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: 'Product Updated Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const tempProduct = await product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!tempProduct) return res.status(404).json({ msg: 'No Data Found' });

  try {
    const filepath = `./public/images/${tempProduct.image}`;
    fs.unlinkSync(filepath);
    await product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'Product Deleted Successfuly' });
  } catch (error) {
    console.log(error.message);
  }
};
