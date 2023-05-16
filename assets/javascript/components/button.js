import { calculateIntermediateBTC } from '../calculation/intermediate.js';
import { calculateProductionBTC } from '../calculation/production.js';
import { calculateSurfaceBTC } from '../calculation/surface.js';

export function buttonSubmitReuseable(buttonId, functionExecuted) {
  const parent = document.getElementById(buttonId);
  parent.onclick = functionExecuted;

  return parent;
}

buttonSubmitReuseable('button-submit-surface', () => calculateSurfaceBTC());
buttonSubmitReuseable('button-submit-intermediate', () =>
  calculateIntermediateBTC()
);
buttonSubmitReuseable('button-submit-production', () =>
  calculateProductionBTC()
);
