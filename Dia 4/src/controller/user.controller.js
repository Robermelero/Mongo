const Photo = require("../model/photo");


const getPhotosByUser = async (req, res) => {
  try {
    let { user } = req.params;
    let photos = await Photo.find({ user });

    if (photos.length > 0) {
      res.json({
        error: false,
        codigo: 200,
        mensaje: "Fotos disponibles",
        data: photos,
      });
    } else {
      res.json({
        error: true,
        codigo: 200,
        mensaje: "No hay fotos",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const uploadPhoto = async (req, res) => {
  let { user, url, title, description } = req.body;
  try {
    let newPhoto = new Photo({ user, url, title, description });
    await newPhoto.save();

    res.json({
      error: false,
      codigo: 200,
      mensaje: "Foto subida correctamente",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      codigo: 500,
      mensaje: "Error al subir la foto",
      data: null,
    });
  }
};

const updatePhotoDescription = async (req, res) => {
  let { title, description } = req.body;
  try {
    await Photo.findOneAndUpdate({ title }, { description });

    res.json({
      error: false,
      codigo: 200,
      mensaje: "Descripción de la foto actualizada correctamente",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      codigo: 500,
      mensaje: "Error al modificar la descripción de la foto",
      data: null,
    });
  }
};

const deletePhoto = async (req, res) => {
  const { user, title } = req.body;
  try {
    let deletedPhoto = await Photo.findOneAndDelete({ user, title });

    if (deletedPhoto) {
      res.json({
        error: false,
        codigo: 200,
        mensaje: "Foto eliminada correctamente",
        data: null,
      });
    } else {
      res.status(404).json({
        error: true,
        codigo: 404,
        mensaje: "No se encontró la foto",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteAllPhotosByUser = async (req, res) => {
  const { user } = req.params;
  try {
    await Photo.deleteMany({ user });

    res.json({
      error: false,
      codigo: 200,
      mensaje: "Todas las fotos del usuario han sido eliminadas",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      codigo: 500,
      mensaje: "Error al eliminar todas las fotos del usuario",
      data: null,
    });
  }
};

module.exports = { getPhotosByUser, uploadPhoto, updatePhotoDescription, deletePhoto, deleteAllPhotosByUser };
