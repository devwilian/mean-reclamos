const Solicitante = require('../models/solicitante');
const solicitanteCtrll = {};

solicitanteCtrll.getSolicitantes = async (req,res)=>{
    const solicitante = await Solicitante.find();
    res.json(solicitante);
};
solicitanteCtrll.createSolicitante = async (req,res)=>{
    const solici = new Solicitante({
        nrodocumento :  req.body.nrodocumento,
        telefono :  req.body.telefono,
        apellidopaterno :   req.body.apellidopaterno,
        apellidomaterno :   req.body.apellidomaterno,
        nombres :   req.body.nombres,
        correo :    req.body.correo,
    }); 
    await solici.save();
    res.json({
        'status': 'Solicitante guardado!'
    });
};
solicitanteCtrll.getSolicitante = async (req,res)=>{
    const solici = await Solicitante.findById(req.params.id);
    res.json(solici);
};
solicitanteCtrll.updateSolcitante=async (req,res)=>{
    const solici = {
        nrodocumento :  req.body.nrodocumento,
        telefono :  req.body.telefono,
        apellidopaterno :   req.body.apellidopaterno,
        apellidomaterno :   req.body.apellidomaterno,
        nombres :   req.body.nombres,
        correo :    req.body.correo,
    }
    await Solicitante.findByIdAndUpdate(req.params.id,{$set : solici},{new: true});
    res.json({
        'status':'Solicitante actualizado!'
    })
};
solicitanteCtrll.deleteSolcitante=async (req,res)=>{
    await Solicitante.findByIdAndRemove(req.params.id);
    res.json({
        'status':'Solicitante eliminado!'
    });
};
module.exports = solicitanteCtrll;