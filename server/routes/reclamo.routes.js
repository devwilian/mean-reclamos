const { Router } = require('express');
const express = require('express');
const router = express.Router();
const solicitanteCtrll = require('../controllers/solicitante.controller')


router.get('/',solicitanteCtrll.getSolicitantes);
router.post('/',solicitanteCtrll.createSolicitante);
router.get('/:id',solicitanteCtrll.getSolicitante);
router.put('/:id',solicitanteCtrll.updateSolcitante);
router.delete('/:id',solicitanteCtrll.deleteSolcitante);

module.exports = router;