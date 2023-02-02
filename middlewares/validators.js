import { check, validationResult } from 'express-validator'


export const registerValidation = [

      check('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
      check('address').isLength({ min: 10 }).withMessage('Address must be at least 10 characters'),
      check('email').isEmail().withMessage('Invalid email address'),
      check('phone').isNumeric().withMessage('Phone number must be numeric'),
      check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
      check('photo').isLength({ min: 8 }).withMessage('NOT DONE YEt🔴🔴'),
      check('psy_id').isNumeric().withMessage('psy_id must be numeric'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];