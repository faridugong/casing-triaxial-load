export function calculateSurfaceBTC() {
  const casingWeightSurface = document.getElementById(
    'casingWeightSurface'
  ).value;
  const doglegSeveritySurface = document.getElementById(
    'doglegSeveritySurface'
  ).value;
  const testPressureSurface = document.getElementById(
    'testPressureSurface'
  ).value;
  const insideDiameterSurface =
    (document.getElementById('insideDiameterSurface').value * 1) / 12;
  const outsideDiameterSurface =
    (document.getElementById('outsideDiameterSurface').value * 1) / 12;
  const TVDsurface = document.getElementById('TVDsurface').value;
  const CSDinputSurface = document.getElementById('CSDinputSurface').value;
  const ppgInputSurface = document.getElementById('ppgInputSurface').value;
  const TDsurface = document.getElementById('TDsurface').value;
  const gasGradientSurface =
    document.getElementById('gasGradientSurface').value;
  const formationPressureSurface = document.getElementById(
    'formationPressureSurface'
  ).value;
  const tSurface =
    (document.getElementById('casingThicknessSurface').value * 1) / 12;
  const SFsurfaceB = document.getElementById('safetyFactorSurfaceB').value;
  const SFsurfaceC = document.getElementById('safetyFactorSurfaceC').value;
  const SFsurfaceT = document.getElementById('safetyFactorSurfaceT').value;
  const surfaceCollapsePressure = 0.052 * (CSDinputSurface * ppgInputSurface);
  const surfaceCollapseResistance = surfaceCollapsePressure * SFsurfaceC + 500;
  const B1Surface = formationPressureSurface - gasGradientSurface * TDsurface;
  const B2Surface =
    formationPressureSurface -
    gasGradientSurface * (TDsurface - CSDinputSurface) -
    0.465 * CSDinputSurface;
  const surfaceBurstResistance = B1Surface * SFsurfaceB;
  function YmSurfaceBurstCalculation() {
    let YmSurfaceBurst;
    YmSurfaceBurst =
      (surfaceBurstResistance * outsideDiameterSurface) / (tSurface * 2);
    if (YmSurfaceBurst <= 40000) {
      YmSurfaceBurst = 40000;
    } else if (YmSurfaceBurst > 40000 && YmSurfaceBurst <= 55000) {
      YmSurfaceBurst = 55000;
    } else if (YmSurfaceBurst > 55000 && YmSurfaceBurst <= 75000) {
      YmSurfaceBurst = 75000;
    } else if (YmSurfaceBurst > 75000 && YmSurfaceBurst <= 80000) {
      YmSurfaceBurst = 80000;
    } else if (YmSurfaceBurst > 80000 && YmSurfaceBurst <= 90000) {
      YmSurfaceBurst = 90000;
    } else if (YmSurfaceBurst > 90000 && YmSurfaceBurst <= 95000) {
      YmSurfaceBurst = 95000;
    } else if (YmSurfaceBurst > 95000 && YmSurfaceBurst <= 105000) {
      YmSurfaceBurst = 105000;
    } else if (YmSurfaceBurst > 105000 && YmSurfaceBurst <= 110000) {
      YmSurfaceBurst = 110000;
    } else if (YmSurfaceBurst > 110000 && YmSurfaceBurst <= 115000) {
      YmSurfaceBurst = 115000;
    } else YmSurfaceBurst = 120000;

    return YmSurfaceBurst;
  }
  const YmSurfaceBurst = YmSurfaceBurstCalculation();

  const newSurfaceBurstResistance =
    (2 * YmSurfaceBurst * tSurface) / outsideDiameterSurface;
  const bouyantWeightSurface =
    casingWeightSurface * TVDsurface -
    ((0.052 * ppgInputSurface * TVDsurface * Math.PI) / 4) *
      (outsideDiameterSurface ** 2 - insideDiameterSurface ** 2);
  const bendingForceSurface =
    63 * casingWeightSurface * outsideDiameterSurface * doglegSeveritySurface;
  const pressureTestingSurface =
    (Math.PI * insideDiameterSurface ** 2 * testPressureSurface) / 4;
  const surfaceTentionPressure =
    bouyantWeightSurface + bendingForceSurface + pressureTestingSurface;
  const surfaceTentionResistance = surfaceTentionPressure * SFsurfaceT;
  function YmSurfaceTentionCalculation() {
    let YmSurfaceTention;
    YmSurfaceTention =
      surfaceTentionResistance /
      (0.7854 * (outsideDiameterSurface ** 2 - insideDiameterSurface ** 2));

    if (YmSurfaceTention <= 40000) {
      YmSurfaceTention = 40000;
    } else if (YmSurfaceTention > 40000 && YmSurfaceTention <= 55000) {
      YmSurfaceTention = 55000;
    } else if (YmSurfaceTention > 55000 && YmSurfaceTention <= 75000) {
      YmSurfaceTention = 75000;
    } else if (YmSurfaceTention > 75000 && YmSurfaceTention <= 80000) {
      YmSurfaceTention = 80000;
    } else if (YmSurfaceTention > 80000 && YmSurfaceTention <= 90000) {
      YmSurfaceTention = 90000;
    } else if (YmSurfaceTention > 90000 && YmSurfaceTention <= 95000) {
      YmSurfaceTention = 95000;
    } else if (YmSurfaceTention > 95000 && YmSurfaceTention <= 105000) {
      YmSurfaceTention = 105000;
    } else if (YmSurfaceTention > 105000 && YmSurfaceTention <= 110000) {
      YmSurfaceTention = 110000;
    } else if (YmSurfaceTention > 110000 && YmSurfaceTention <= 115000) {
      YmSurfaceTention = 115000;
    } else {
      YmSurfaceTention = 120000;
    }
    return YmSurfaceTention;
  }
  const YmSurfaceTention = YmSurfaceTentionCalculation();

  const newSurfaceTentionResistance =
    0.7854 *
    YmSurfaceTention *
    (outsideDiameterSurface ** 2 - insideDiameterSurface ** 2);

  const plotC = Plotly.newPlot(
    'plotSurfaceCollapse',
    [
      {
        x: [0, surfaceCollapsePressure],
        y: [0, -CSDinputSurface],
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
        x: [0, surfaceCollapsePressure * SFsurfaceC],
        y: [0, -CSDinputSurface],
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
        x: [surfaceCollapseResistance, surfaceCollapseResistance],
        y: [0, -CSDinputSurface],
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
    'plotSurfaceBurst',
    [
      {
        x: [B1Surface, B2Surface],
        y: [0, -CSDinputSurface],
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
        x: [B1Surface * SFsurfaceB, B2Surface],
        y: [0, -CSDinputSurface],
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
        x: [newSurfaceBurstResistance, newSurfaceBurstResistance],
        y: [0, -CSDinputSurface],
        mode: 'line',
        marker: {
          color: 'blue',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: (function () {
          if (YmSurfaceBurst <= 40000) {
            return 'H40';
          } else if (YmSurfaceBurst <= 55000) {
            return 'J55/K55';
          } else if (YmSurfaceBurst <= 75000) {
            return 'C75';
          } else if (YmSurfaceBurst <= 80000) {
            return 'L80/N80';
          } else if (YmSurfaceBurst <= 90000) {
            return 'C90';
          } else if (YmSurfaceBurst <= 95000) {
            return 'C95/T95';
          } else if (YmSurfaceBurst <= 105000) {
            return 'P105';
          } else if (YmSurfaceBurst <= 110000) {
            return 'P110';
          } else if (YmSurfaceBurst <= 125000) {
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
    'plotSurfaceTention',
    [
      {
        x: [surfaceTentionPressure, bouyantWeightSurface + bendingForceSurface],
        y: [0, -CSDinputSurface],
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
          surfaceTentionPressure * SFsurfaceT,
          bouyantWeightSurface + bendingForceSurface,
        ],
        y: [0, -CSDinputSurface],
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
        x: [newSurfaceTentionResistance, newSurfaceTentionResistance],
        y: [0, -CSDinputSurface],
        mode: 'line',
        marker: {
          color: 'blue',
          size: 10,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
        },
        type: 'line',
        name: (function () {
          if (YmSurfaceTention <= 40000) {
            return 'H40';
          } else if (YmSurfaceTention <= 55000) {
            return 'J55/K55';
          } else if (YmSurfaceTention <= 75000) {
            return 'C75';
          } else if (YmSurfaceTention <= 80000) {
            return 'L80/N80';
          } else if (YmSurfaceTention <= 90000) {
            return 'C90';
          } else if (YmSurfaceTention <= 95000) {
            return 'C95/T95';
          } else if (YmSurfaceTention <= 105000) {
            return 'P105';
          } else if (YmSurfaceTention <= 110000) {
            return 'P110';
          } else if (YmSurfaceTention <= 125000) {
            return 'Q125';
          } else {
            return 'Unrecognized Casing Grade';
          }
        })(),
      },
    ],
    {
      title: 'Depth vs Pressure (Tention Pressure)',
      xaxis: { title: 'Pressure (psi)' },
      yaxis: { title: 'Depth (ft)' },
    }
  );
}
