const mongoose = require('mongoose');
const { Schema } = mongoose;

const SolicitanteSchema=new Schema({
    nrodocumento:{type:String,require:true},
    telefono:{type:String,require:true},
    apellidopaterno:{type:String,require:true},
    apellidomaterno:{type:String,require:true},
    nombres:{type:String,require:true},
    correo:{type:String,require:true},
});

module.exports = mongoose.model('Solicitante',SolicitanteSchema);