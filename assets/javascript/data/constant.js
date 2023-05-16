import { constant } from './data.js';

export const newConstant = constant;
newConstant.forEach((v) => {
  v.OD = parseFloat(v.OD);
  v.NOMINAL_WEIGHT = parseFloat(v.NOMINAL_WEIGHT);
  v.COLLAPSE_PRESSURE = parseFloat(v.COLLAPSE_PRESSURE);
  v.IYM_PE = parseFloat(v.IYM_PE);
  v.IYM_STC = parseFloat(v.IYM_STC);
  v.IYM_LTC = parseFloat(v.IYM_LTC);
  v.IYM_BTC = parseFloat(v.IYM_BTC);
  v.JS_STC = parseFloat(v.JS_STC);
  v.JS_LTC = parseFloat(v.JS_LTC);
  v.JS_BTC = parseFloat(v.JS_BTC);
  v.BODY_YIELD = parseFloat(v.BODY_YIELD);
  v.WALL = parseFloat(v.WALL);
  v.ID = parseFloat(v.ID);
  v.DRIFT_DIAMETER = parseFloat(v.DRIFT_DIAMETER);
  v.DISPLACEMENT = parseFloat(v.DISPLACEMENT);
  v.CAPACITY = parseFloat(v.CAPACITY);
});

export const ODArray = [...new Set(newConstant.flatMap((v) => v.OD))];
export const NOMINAL_WEIGHTArray = [
  ...new Set(newConstant.flatMap((v) => v.NOMINAL_WEIGHT)),
];
export const GRADEArray = [...new Set(newConstant.flatMap((v) => v.GRADE))];
export const COLLAPSE_PRESSUREArray = [
  ...new Set(newConstant.flatMap((v) => v.COLLAPSE_PRESSURE)),
];
export const IYM_PEArray = [...new Set(newConstant.flatMap((v) => v.IYM_PE))];
export const IYM_STCArray = [...new Set(newConstant.flatMap((v) => v.IYM_STC))];
export const IYM_LTCArray = [...new Set(newConstant.flatMap((v) => v.IYM_LTC))];
export const IYM_BTCArray = [...new Set(newConstant.flatMap((v) => v.IYM_BTC))];
export const JS_STCArray = [...new Set(newConstant.flatMap((v) => v.JS_STC))];
export const JS_LTCArray = [...new Set(newConstant.flatMap((v) => v.JS_LTC))];
export const JS_BTCArray = [...new Set(newConstant.flatMap((v) => v.JS_BTC))];
export const BODY_YIELDArray = [
  ...new Set(newConstant.flatMap((v) => v.BODY_YIELD)),
];
export const WALLArray = [...new Set(newConstant.flatMap((v) => v.WALL))];
export const IDArray = [...new Set(newConstant.flatMap((v) => v.ID))];
export const DRIFT_DIAMETERArray = [
  ...new Set(newConstant.flatMap((v) => v.DRIFT_DIAMETER)),
];
export const DISPLACEMENTArray = [
  ...new Set(newConstant.flatMap((v) => v.DISPLACEMENT)),
];
export const CAPACITYArray = [
  ...new Set(newConstant.flatMap((v) => v.CAPACITY)),
];
