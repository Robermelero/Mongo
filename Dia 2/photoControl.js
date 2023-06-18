const mongoose = require("mongoose")
const Photo = require("./photo");

mongoose.connect('mongodb+srv://robermelero:administrador@cluster0.rrqe2fn.mongodb.net/Codenotch',
                    {useNewUrlParser: true, useUnifiedTopology: true})

async function uploadPhoto(user, url, title, description) {
    try {
        let newPhoto = new Photo({
        user,
        url,
        title,
        description,
        });
    
        await newPhoto.save();
    
        console.log('Foto subida correctamente.');
    } catch (error) {
        console.error('Error al subir la foto:', error);
    }
    };

    async function getPhotosByUser(user) {
        try {
          let photos = await Photo.find({ user });
      
          console.log('Fotos del usuario:', photos);
        } catch (error) {
          console.error('Error al obtener las fotos:', error);
        }
      };
      
      async function updatePhotoDescription(title, newDescription) {
        try {
          await Photo.findOneAndUpdate({ title }, { description: newDescription });
      
          console.log('Descripción de la foto actualizada correctamente.');
        } catch (error) {
          console.error('Error al modificar la descripción de la foto:', error);
        }
      };
      
      async function deletePhoto(user, title) {
        try {
          await Photo.findOneAndDelete({ user, title });
      
          console.log('Foto eliminada correctamente.');
        } catch (error) {
          console.error('Error al eliminar la foto:', error);
        }
      };
      
      async function deleteAllPhotosByUser(user) {
        try {
          await Photo.deleteMany({ user });
      
          console.log('Todas las fotos del usuario han sido eliminadas.');
        } catch (error) {
          console.error('Error al eliminar todas las fotos del usuario:', error);
        }
      };
    // uploadPhoto('Roberto Melero', 'https://img.freepik.com/fotos-premium/fantastica-vista-cascada-kirkjufellsfoss-cerca-montana-kirkjufell-al-atardecer_761071-868.jpg', 
    //             'Cascada', 'Foto de una cascada de agua cristalina' );
    // getPhotosByUser('Roberto Melero');
    // updatePhotoDescription('Lago', 'Foto de un lago con aguas cristalinas rodeado por montañas');
    // deletePhoto('Roberto Melero', 'Lago');
    // deleteAllPhotosByUser('Roberto Melero')


    module.exports = {uploadPhoto, getPhotosByUser, updatePhotoDescription, deletePhoto, deleteAllPhotosByUser};