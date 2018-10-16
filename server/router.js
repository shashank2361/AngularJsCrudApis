const path = require('path');

const noteController = require('./controllers/notes.scontroller');

module.exports = (app) => {

    
    app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
        
    app.get('/api/notes', noteController.getAllNotes);

    app.get('/api/notes/:id',  noteController.getIndividualNote);

    app.post('/api/notes', noteController.createNewNote);

    app.patch('/api/notes', noteController.updateNote);

    app.delete('/api/notes/:id', noteController.deleteNote);

    //catch anything else and send it to react to deal with
    app.get('/**', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });

};