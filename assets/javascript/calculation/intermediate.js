export function calculateIntermediateBTC() {
  const casingWeightIntermediate = document.getElementById(
    'casingWeightIntermediate'
  ).value;
  const doglegSeverityIntermediate = document.getElementById(
    'doglegSeverityIntermediate'
  ).value;
  const testPressureIntermediate = document.getElementById(
    'testPressureIntermediate'
  ).value;
  const insideDiameterIntermediate =
    (document.getElementById('insideDiameterIntermediate').value * 1) / 12;
  const outsideDiameterIntermediate =
    (document.getElementById('outsideDiameterIntermediate').value * 1) / 12;
  const TVDintermediate = document.getElementById('TVDintermediate').value;
  const CSDinputIntermediate = document.getElementById(
    'CSDinputIntermediate'
  ).value;
  const ppgInputIntermediate = document.getElementById(
    'ppgInputIntermediate'
  ).value;
  const TDintermediate = document.getElementById('TDintermediate').value;
  const gasGradientIntermediate = document.getElementById(
    'gasGradientIntermediate'
  ).value;
  const formationPressureIntermediate = document.getElementById(
    'formationPressureIntermediate'
  ).value;
  const tIntermediate =
    (document.getElementById('casingThicknessIntermediate').value * 1) / 12;
  const SFintermediateB = document.getElementById(
    'safetyFactorIntermediateB'
  ).value;
  const SFintermediateC = document.getElementById(
    'safetyFactorIntermediateC'
  ).value;
  const SFintermediateT = document.getElementById(
    'safetyFactorIntermediateT'
  ).value;
  const intermediateCollapsePressure =
    0.052 * (CSDinputIntermediate * ppgInputIntermediate);
  const B1Intermediate =
    formationPressureIntermediate - gasGradientIntermediate * TDintermediate;
  const B2Intermediate =
    formationPressureIntermediate -
    gasGradientIntermediate * (TDintermediate - CSDinputIntermediate) -
    0.465 * CSDinputIntermediate;
  const intermediateBurstResistance = B1Intermediate * SFintermediateB;
  function YmIntermediateBurstCalculation() {
    let YmIntermediateBurst =
      (intermediateBurstResistance * outsideDiameterIntermediate) /
      (tIntermediate * 2);

    if (YmIntermediateBurst <= 40000) {
      YmIntermediateBurst = 40000;
    } else if (YmIntermediateBurst > 40000 && YmIntermediateBurst <= 55000) {
      YmIntermediateBurst = 55000;
    } else if (YmIntermediateBurst > 55000 && YmIntermediateBurst <= 75000) {
      YmIntermediateBurst = 75000;
    } else if (YmIntermediateBurst > 75000 && YmIntermediateBurst <= 80000) {
      YmIntermediateBurst = 80000;
    } else if (YmIntermediateBurst > 80000 && YmIntermediateBurst <= 90000) {
      YmIntermediateBurst = 90000;
    } else if (YmIntermediateBurst > 90000 && YmIntermediateBurst <= 95000) {
      YmIntermediateBurst = 95000;
    } else if (YmIntermediateBurst > 95000 && YmIntermediateBurst <= 105000) {
      YmIntermediateBurst = 105000;
    } else if (YmIntermediateBurst > 105000 && YmIntermediateBurst <= 110000) {
      YmIntermediateBurst = 110000;
    } else if (YmIntermediateBurst > 110000 && YmIntermediateBurst <= 115000) {
      YmIntermediateBurst = 115000;
    } else {
      YmIntermediateBurst = 120000;
    }

    return YmIntermediateBurst;
  }

  const YmIntermediateBurst = YmIntermediateBurstCalculation();

  const newIntermediateBurstResistance =
    (2 * YmIntermediateBurst * tIntermediate) / outsideDiameterIntermediate;
  const bouyantWeightIntermediate =
    casingWeightIntermediate * TVDintermediate -
    ((0.052 * ppgInputIntermediate * TVDintermediate * Math.PI) / 4) *
      (outsideDiameterIntermediate ** 2 - insideDiameterIntermediate ** 2);
  const bendingForceIntermediate =
    63 *
    casingWeightIntermediate *
    outsideDiameterIntermediate *
    doglegSeverityIntermediate;
  const pressureTestingIntermediate =
    (Math.PI * insideDiameterIntermediate ** 2 * testPressureIntermediate) / 4;
  const intermediateTentionPressure =
    bouyantWeightIntermediate +
    bendingForceIntermediate +
    pressureTestingIntermediate;

  const intermediateTentionResistance =
    intermediateTentionPressure * SFintermediateT;

  function YmIntermediateTentionCalculation() {
    let YmIntermediateTention =
      intermediateTentionResistance /
      (0.7854 *
        (outsideDiameterIntermediate ** 2 - insideDiameterIntermediate ** 2));

    if (YmIntermediateTention <= 40000) {
      YmIntermediateTention = 40000;
    } else if (
      YmIntermediateTention > 40000 &&
      YmIntermediateTention <= 55000
    ) {
      YmIntermediateTention = 55000;
    } else if (
      YmIntermediateTention > 55000 &&
      YmIntermediateTention <= 75000
    ) {
      YmIntermediateTention = 75000;
    } else if (
      YmIntermediateTention > 75000 &&
      YmIntermediateTention <= 80000
    ) {
      YmIntermediateTention = 80000;
    } else if (
      YmIntermediateTention > 80000 &&
      YmIntermediateTention <= 90000
    ) {
      YmIntermediateTention = 90000;
    } else if (
      YmIntermediateTention > 90000 &&
      YmIntermediateTention <= 95000
    ) {
      YmIntermediateTention = 95000;
    } else if (
      YmIntermediateTention > 95000 &&
      YmIntermediateTention <= 105000
    ) {
      YmIntermediateTention = 105000;
    } else if (
      YmIntermediateTention > 105000 &&
      YmIntermediateTention <= 110000
    ) {
      YmIntermediateTention = 110000;
    } else if (
      YmIntermediateTention > 110000 &&
      YmIntermediateTention <= 115000
    ) {
      YmIntermediateTention = 115000;
    } else {
      YmIntermediateTention = 120000;
    }
    return YmIntermediateTention;
  }

  const YmIntermediateTention = YmIntermediateTentionCalculation();

  const newIntermediateTentionResistance =
    0.7854 *
    YmIntermediateTention *
    (outsideDiameterIntermediate ** 2 - insideDiameterIntermediate ** 2);
  const plotC = Plotly.newPlot(
    'plotIntermediateCollapse',
    [
      {
        x: [0, intermediateCollapsePressure],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'red',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: 'Collapse Load',
      },
      {
        x: [0, intermediateCollapsePressure * SFintermediateC],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'red',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },

        type: 'line',
        line: {
          dash: 'dot',
          width: 4,
        },
        name: 'Collapse Design',
      },
      {
        x: [
          intermediateCollapsePressure * SFintermediateC + 500,
          intermediateCollapsePressure * SFintermediateC + 500,
        ],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'blue',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
      },
    ],
    {
      title: 'Depth vs Pressure (Collapse Pressure)',
      xaxis: {
        title: 'Pressure (psi)',
      },
      yaxis: {
        title: 'Depth (ft)',
      },
    }
  );
  const plotB = Plotly.newPlot(
    'plotIntermediateBurst',
    [
      {
        x: [B1Intermediate, B2Intermediate],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'red',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: 'Burst Load',
      },
      {
        x: [B1Intermediate * SFintermediateB, B2Intermediate],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'red',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        line: {
          dash: 'dot',
          width: 4,
        },
        name: 'Burst Design',
      },
      {
        x: [newIntermediateBurstResistance, newIntermediateBurstResistance],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'blue',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: (function () {
          if (YmIntermediateBurst <= 40000) {
            return 'H40';
          } else if (YmIntermediateBurst <= 55000) {
            return 'J55/K55';
          } else if (YmIntermediateBurst <= 75000) {
            return 'C75';
          } else if (YmIntermediateBurst <= 80000) {
            return 'L80/N80';
          } else if (YmIntermediateBurst <= 90000) {
            return 'C90';
          } else if (YmIntermediateBurst <= 95000) {
            return 'C95/T95';
          } else if (YmIntermediateBurst <= 105000) {
            return 'P105';
          } else if (YmIntermediateBurst <= 110000) {
            return 'P110';
          } else if (YmIntermediateBurst <= 125000) {
            return 'Q125';
          } else {
            return 'Unrecognized Casing Grade';
          }
        })(),
      },
    ],
    {
      title: 'Depth vs Pressure (Burst Pressure)',
      xaxis: { title: 'Pressure (psi)' },
      yaxis: { title: 'Depth (ft)' },
    }
  );
  const plotT = Plotly.newPlot(
    'plotIntermediateTention',
    [
      {
        x: [
          intermediateTentionPressure,
          bouyantWeightIntermediate + bendingForceIntermediate,
        ],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'red',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: 'Tention Load',
      },
      {
        x: [
          intermediateTentionPressure * SFintermediateT,
          bouyantWeightIntermediate + bendingForceIntermediate,
        ],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'red',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        line: {
          dash: 'dot',
          width: 4,
        },
        name: 'Tention Design',
      },
      {
        x: [newIntermediateTentionResistance, newIntermediateTentionResistance],
        y: [0, -CSDinputIntermediate],
        mode: 'line',
        marker: {
          color: 'blue',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: (function () {
          if (YmIntermediateTention <= 40000) {
            return 'H40';
          } else if (YmIntermediateTention <= 55000) {
            return 'J55/K55';
          } else if (YmIntermediateTention <= 75000) {
            return 'C75';
          } else if (YmIntermediateTention <= 80000) {
            return 'L80/N80';
          } else if (YmIntermediateTention <= 90000) {
            return 'C90';
          } else if (YmIntermediateTention <= 95000) {
            return 'C95/T95';
          } else if (YmIntermediateTention <= 105000) {
            return 'P105';
          } else if (YmIntermediateTention <= 110000) {
            return 'P110';
          } else if (YmIntermediateTention <= 125000) {
            return 'Q125';
          } else {
            return 'Unrecognized Casing Grade';
          }
        })(),
      },
    ],
    {
      title: 'Depth vs Pressure (Tention Pressure)',
      xaxis: {
        title: 'Pressure (psi)',
      },
      yaxis: {
        title: 'Depth (ft)',
      },
    }
  );
}
