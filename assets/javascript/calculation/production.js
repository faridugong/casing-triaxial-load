export function calculateProductionBTC() {
  const casingWeightProduction = document.getElementById(
    'casingWeightProduction'
  ).value;
  const doglegSeverityProduction = document.getElementById(
    'doglegSeverityProduction'
  ).value;
  const testPressureProduction = document.getElementById(
    'testPressureProduction'
  ).value;
  const insideDiameterProduction =
    (document.getElementById('insideDiameterProduction').value * 1) / 12;
  const outsideDiameterProduction =
    (document.getElementById('outsideDiameterProduction').value * 1) / 12;
  const CSDinputProduction =
    document.getElementById('CSDinputProduction').value;
  const ppgInputProduction =
    document.getElementById('ppgInputProduction').value;
  const formationPressureProduction = document.getElementById(
    'formationPressureProduction'
  ).value;

  const tProduction =
    (document.getElementById('casingThicknessProduction').value * 1) / 12;
  const SFproductionB = document.getElementById(
    'safetyFactorProductionB'
  ).value;
  const SFproductionC = document.getElementById(
    'safetyFactorProductionC'
  ).value;
  const SFproductionT = document.getElementById(
    'safetyFactorProductionT'
  ).value;
  const gasGradientProduction = document.getElementById(
    'gasGradientProduction'
  ).value;
  const completionDensity = document.getElementById('completionDensity').value;
  const productionCollapsePressure =
    0.052 * (CSDinputProduction * ppgInputProduction);
  const B1Production =
    formationPressureProduction - gasGradientProduction * CSDinputProduction;
  const B2Production =
    B1Production +
    0.052 * completionDensity * CSDinputProduction -
    CSDinputProduction * 0.465;
  const productionBurstResistance = B1Production * SFproductionB;
  function YmProductionBurstCalculation() {
    let YmProductionBurst =
      (productionBurstResistance * outsideDiameterProduction) /
      (tProduction * 2);
    if (YmProductionBurst <= 40000) {
      YmProductionBurst = 40000;
    } else if (YmProductionBurst > 40000 && YmProductionBurst <= 55000) {
      YmProductionBurst = 55000;
    } else if (YmProductionBurst > 55000 && YmProductionBurst <= 75000) {
      YmProductionBurst = 75000;
    } else if (YmProductionBurst > 75000 && YmProductionBurst <= 80000) {
      YmProductionBurst = 80000;
    } else if (YmProductionBurst > 80000 && YmProductionBurst <= 90000) {
      YmProductionBurst = 90000;
    } else if (YmProductionBurst > 90000 && YmProductionBurst <= 95000) {
      YmProductionBurst = 95000;
    } else if (YmProductionBurst > 95000 && YmProductionBurst <= 105000) {
      YmProductionBurst = 105000;
    } else if (YmProductionBurst > 105000 && YmProductionBurst <= 110000) {
      YmProductionBurst = 110000;
    } else if (YmProductionBurst > 110000 && YmProductionBurst <= 115000) {
      YmProductionBurst = 115000;
    } else {
      YmProductionBurst = 120000;
    }

    return YmProductionBurst;
  }
  const YmProductionBurst = YmProductionBurstCalculation();

  const newProductionBurstResistance =
    (2 * YmProductionBurst * tProduction) / outsideDiameterProduction;
  const bouyantWeightProduction =
    casingWeightProduction * CSDinputProduction -
    ((0.052 * ppgInputProduction * CSDinputProduction * Math.PI) / 4) *
      (outsideDiameterProduction ** 2 - insideDiameterProduction ** 2);
  const bendingForceProduction =
    63 *
    casingWeightProduction *
    outsideDiameterProduction *
    doglegSeverityProduction;
  const pressureTestingProduction =
    (Math.PI * insideDiameterProduction ** 2 * testPressureProduction) / 4;
  const productionTentionPressure =
    bouyantWeightProduction +
    bendingForceProduction +
    pressureTestingProduction;
  const plot = Plotly.newPlot(
    'plotProductionCollapse',
    [
      {
        x: [0, productionCollapsePressure],
        y: [0, -CSDinputProduction],
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
        x: [0, productionCollapsePressure * SFproductionC],
        y: [0, -CSDinputProduction],
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
          productionCollapsePressure * SFproductionC + 500,
          productionCollapsePressure * SFproductionC + 500,
        ],
        y: [0, -CSDinputProduction],
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
    'plotProductionBurst',
    [
      {
        x: [B1Production, B2Production],
        y: [0, -CSDinputProduction],
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
        x: [B1Production * SFproductionB, B2Production],
        y: [0, -CSDinputProduction],
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
        x: [newProductionBurstResistance, newProductionBurstResistance],
        y: [0, -CSDinputProduction],
        mode: 'line',
        marker: {
          color: 'blue',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: (function () {
          if (YmProductionBurst <= 40000) {
            return 'H40';
          } else if (YmProductionBurst <= 55000) {
            return 'J55/K55';
          } else if (YmProductionBurst <= 75000) {
            return 'C75';
          } else if (YmProductionBurst <= 80000) {
            return 'L80/N80';
          } else if (YmProductionBurst <= 90000) {
            return 'C90';
          } else if (YmProductionBurst <= 95000) {
            return 'C95/T95';
          } else if (YmProductionBurst <= 105000) {
            return 'P105';
          } else if (YmProductionBurst <= 110000) {
            return 'P110';
          } else if (YmProductionBurst <= 125000) {
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
    'plotProductionTention',
    [
      {
        x: [
          productionTentionPressure,
          bouyantWeightProduction + bendingForceProduction,
        ],
        y: [0, -CSDinputProduction],
        mode: 'line',
        marker: {
          color: 'red',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: 'Tention Design',
      },
      {
        x: [
          productionTentionPressure * SFproductionT,
          bouyantWeightProduction + bendingForceProduction,
        ],
        y: [0, -CSDinputProduction],
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
      },
      {
        x: [
          productionTentionPressure * SFproductionT + 500,
          productionTentionPressure * SFproductionT + 500,
        ],
        y: [0, -CSDinputProduction],
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
