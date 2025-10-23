import { Router} from 'express';
import {
    getCuentas,
    getCuentaById,
    getCuentasBalance
} from '../controllers/cuentasController.js';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        api: 'Cuentas API',
        endpoints: [
            { method: 'GET', path: '/cuentas' },
            { method: 'GET', path: '/cuenta/:id' },
            { method: 'GET', path: '/cuentas?gender=female' },
            { method: 'GET', path: '/cuentasBalance' }
        ]
    });
});

router.get('/cuentas', getCuentas);
router.get('/cuenta/:id', getCuentaById);
router.get('/cuentasBalance', getCuentasBalance);

router.get('/cuentas/genero/:gender', (req, res) => {
    req.query.gender = req.params.gender;
    return getCuentas(req, res);
}); 

export default router;