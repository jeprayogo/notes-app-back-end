const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler, 
    deletNoteByIdHandler
} = require("./handler");

const routes = [
    //Menambah Note
  {
    method : 'POST',
    path : '/notes',
    handler : addNoteHandler,
  },

  //Mendapatkan data note
  {
    method : 'GET',
    path : '/notes',
    handler : getAllNotesHandler,
  },

  // mendapatkan detail note
  {
    method : 'GET',
    path : '/notes/{id}',
    handler : getNoteByIdHandler,
  },

  //edit note
  {
    method : 'PUT',
    path : '/notes/{id}',
    handler : editNoteByIdHandler,
  },

  //Delete Note
  {
    method : 'DELETE',
    path : '/notes/{id}',
    handler : deletNoteByIdHandler,
  },
];

module.exports = routes;
