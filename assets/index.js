const openResult = (evt, casingName) => {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(casingName).style.display = "block";
  evt.currentTarget.className += " active";
};

function calculateSurfaceBTC() {
  var casingWeightSurface = document.getElementById(
    "casingWeightSurface"
  ).value;
  var doglegSeveritySurface = document.getElementById(
    "doglegSeveritySurface"
  ).value;
  var testPressureSurface = document.getElementById(
    "testPressureSurface"
  ).value;
  var insideDiameterSurface =
    (document.getElementById("insideDiameterSurface").value * 1) / 12;
  var outsideDiameterSurface =
    (document.getElementById("outsideDiameterSurface").value * 1) / 12;
  var TVDsurface = document.getElementById("TVDsurface").value;
  var CSDinputSurface = document.getElementById("CSDinputSurface").value;
  var ppgInputSurface = document.getElementById("ppgInputSurface").value;
  var TDsurface = document.getElementById("TDsurface").value;
  var gasGradientSurface = document.getElementById("gasGradientSurface").value;
  var formationPressureSurface = document.getElementById(
    "formationPressureSurface"
  ).value;
  var tSurface =
    (document.getElementById("casingThicknessSurface").value * 1) / 12;
  var SFsurfaceB = document.getElementById("safetyFactorSurfaceB").value;
  var SFsurfaceC = document.getElementById("safetyFactorSurfaceC").value;
  var SFsurfaceT = document.getElementById("safetyFactorSurfaceT").value;
  var surfaceCollapsePressure = 0.052 * (CSDinputSurface * ppgInputSurface);
  var surfaceCollapseResistance = surfaceCollapsePressure * SFsurfaceC + 500;
  var B1Surface = formationPressureSurface - gasGradientSurface * TDsurface;
  var B2Surface =
    formationPressureSurface -
    gasGradientSurface * (TDsurface - CSDinputSurface) -
    0.465 * CSDinputSurface;
  var surfaceBurstResistance = B1Surface * SFsurfaceB;
  var YmSurfaceBurst =
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
  } else {
    YmSurfaceBurst = 120000;
  }

  var newSurfaceBurstResistance =
    (2 * YmSurfaceBurst * tSurface) / outsideDiameterSurface;
  var bouyantWeightSurface =
    casingWeightSurface * TVDsurface -
    ((0.052 * ppgInputSurface * TVDsurface * Math.PI) / 4) *
      (outsideDiameterSurface ** 2 - insideDiameterSurface ** 2);
  var bendingForceSurface =
    63 * casingWeightSurface * outsideDiameterSurface * doglegSeveritySurface;
  var pressureTestingSurface =
    (Math.PI * insideDiameterSurface ** 2 * testPressureSurface) / 4;
  var surfaceTentionPressure =
    bouyantWeightSurface + bendingForceSurface + pressureTestingSurface;
  var surfaceTentionResistance = surfaceTentionPressure * SFsurfaceT;
  var YmSurfaceTention =
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
  var newSurfaceTentionResistance =
    0.7854 *
    YmSurfaceTention *
    (outsideDiameterSurface ** 2 - insideDiameterSurface ** 2);
  var plotC = Plotly.newPlot(
    "plotSurfaceCollapse",
    [
      {
        x: [0, surfaceCollapsePressure],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Collapse Load",
      },
      {
        x: [0, surfaceCollapsePressure * SFsurfaceC],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },

        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
        name: "Collapse Design",
      },
      {
        x: [surfaceCollapseResistance, surfaceCollapseResistance],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
      },
    ],
    {
      title: "Depth vs Pressure (Collapse Pressure)",
      xaxis: {
        title: "Pressure (psi)",
      },
      yaxis: {
        title: "Depth (ft)",
      },
    }
  );
  var plotB = Plotly.newPlot(
    "plotSurfaceBurst",
    [
      {
        x: [B1Surface, B2Surface],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Burst Load",
      },
      {
        x: [B1Surface * SFsurfaceB, B2Surface],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
        name: "Burst Design",
      },

      {
        x: [newSurfaceBurstResistance, newSurfaceBurstResistance],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: (function () {
          if (YmSurfaceBurst <= 40000) {
            return "H40";
          } else if (YmSurfaceBurst <= 55000) {
            return "J55/K55";
          } else if (YmSurfaceBurst <= 75000) {
            return "C75";
          } else if (YmSurfaceBurst <= 80000) {
            return "L80/N80";
          } else if (YmSurfaceBurst <= 90000) {
            return "C90";
          } else if (YmSurfaceBurst <= 95000) {
            return "C95/T95";
          } else if (YmSurfaceBurst <= 105000) {
            return "P105";
          } else if (YmSurfaceBurst <= 110000) {
            return "P110";
          } else if (YmSurfaceBurst <= 125000) {
            return "Q125";
          } else {
            return "Unrecognized Casing Grade";
          }
        })(),
      },
    ],
    {
      title: "Depth vs Pressure (Burst Pressure)",
      xaxis: { title: "Pressure (psi)" },
      yaxis: { title: "Depth (ft)" },
    }
  );
  var plotT = Plotly.newPlot(
    "plotSurfaceTention",
    [
      {
        x: [surfaceTentionPressure, bouyantWeightSurface + bendingForceSurface],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Tention Load",
      },
      {
        x: [
          surfaceTentionPressure * SFsurfaceT,
          bouyantWeightSurface + bendingForceSurface,
        ],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
        name: "Tention Design",
      },
      {
        x: [newSurfaceTentionResistance, newSurfaceTentionResistance],
        y: [0, -CSDinputSurface],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: (function () {
          if (YmSurfaceTention <= 40000) {
            return "H40";
          } else if (YmSurfaceTention <= 55000) {
            return "J55/K55";
          } else if (YmSurfaceTention <= 75000) {
            return "C75";
          } else if (YmSurfaceTention <= 80000) {
            return "L80/N80";
          } else if (YmSurfaceTention <= 90000) {
            return "C90";
          } else if (YmSurfaceTention <= 95000) {
            return "C95/T95";
          } else if (YmSurfaceTention <= 105000) {
            return "P105";
          } else if (YmSurfaceTention <= 110000) {
            return "P110";
          } else if (YmSurfaceTention <= 125000) {
            return "Q125";
          } else {
            return "Unrecognized Casing Grade";
          }
        })(),
      },
    ],
    {
      title: "Depth vs Pressure (Tention Pressure)",
      xaxis: { title: "Pressure (psi)" },
      yaxis: { title: "Depth (ft)" },
    }
  );
}

function calculateIntermediateBTC() {
  var casingWeightIntermediate = document.getElementById(
    "casingWeightIntermediate"
  ).value;
  var doglegSeverityIntermediate = document.getElementById(
    "doglegSeverityIntermediate"
  ).value;
  var testPressureIntermediate = document.getElementById(
    "testPressureIntermediate"
  ).value;
  var insideDiameterIntermediate =
    (document.getElementById("insideDiameterIntermediate").value * 1) / 12;
  var outsideDiameterIntermediate =
    (document.getElementById("outsideDiameterIntermediate").value * 1) / 12;
  var TVDintermediate = document.getElementById("TVDintermediate").value;
  var CSDinputIntermediate = document.getElementById(
    "CSDinputIntermediate"
  ).value;
  var ppgInputIntermediate = document.getElementById(
    "ppgInputIntermediate"
  ).value;
  var TDintermediate = document.getElementById("TDintermediate").value;
  var gasGradientIntermediate = document.getElementById(
    "gasGradientIntermediate"
  ).value;
  var formationPressureIntermediate = document.getElementById(
    "formationPressureIntermediate"
  ).value;
  var tIntermediate =
    (document.getElementById("casingThicknessIntermediate").value * 1) / 12;
  var SFintermediateB = document.getElementById(
    "safetyFactorIntermediateB"
  ).value;
  var SFintermediateC = document.getElementById(
    "safetyFactorIntermediateC"
  ).value;
  var SFintermediateT = document.getElementById(
    "safetyFactorIntermediateT"
  ).value;
  var intermediateCollapsePressure =
    0.052 * (CSDinputIntermediate * ppgInputIntermediate);
  var B1Intermediate =
    formationPressureIntermediate - gasGradientIntermediate * TDintermediate;
  var B2Intermediate =
    formationPressureIntermediate -
    gasGradientIntermediate * (TDintermediate - CSDinputIntermediate) -
    0.465 * CSDinputIntermediate;
  var intermediateBurstResistance = B1Intermediate * SFintermediateB;
  var YmIntermediateBurst =
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

  var newIntermediateBurstResistance =
    (2 * YmIntermediateBurst * tIntermediate) / outsideDiameterIntermediate;
  var bouyantWeightIntermediate =
    casingWeightIntermediate * TVDintermediate -
    ((0.052 * ppgInputIntermediate * TVDintermediate * Math.PI) / 4) *
      (outsideDiameterIntermediate ** 2 - insideDiameterIntermediate ** 2);
  var bendingForceIntermediate =
    63 *
    casingWeightIntermediate *
    outsideDiameterIntermediate *
    doglegSeverityIntermediate;
  var pressureTestingIntermediate =
    (Math.PI * insideDiameterIntermediate ** 2 * testPressureIntermediate) / 4;
  var intermediateTentionPressure =
    bouyantWeightIntermediate +
    bendingForceIntermediate +
    pressureTestingIntermediate;

  var intermediateTentionResistance =
    intermediateTentionPressure * SFintermediateT;
  var YmIntermediateTention =
    intermediateTentionResistance /
    (0.7854 *
      (outsideDiameterIntermediate ** 2 - insideDiameterIntermediate ** 2));

  if (YmIntermediateTention <= 40000) {
    YmIntermediateTention = 40000;
  } else if (YmIntermediateTention > 40000 && YmIntermediateTention <= 55000) {
    YmIntermediateTention = 55000;
  } else if (YmIntermediateTention > 55000 && YmIntermediateTention <= 75000) {
    YmIntermediateTention = 75000;
  } else if (YmIntermediateTention > 75000 && YmIntermediateTention <= 80000) {
    YmIntermediateTention = 80000;
  } else if (YmIntermediateTention > 80000 && YmIntermediateTention <= 90000) {
    YmIntermediateTention = 90000;
  } else if (YmIntermediateTention > 90000 && YmIntermediateTention <= 95000) {
    YmIntermediateTention = 95000;
  } else if (YmIntermediateTention > 95000 && YmIntermediateTention <= 105000) {
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
  var newIntermediateTentionResistance =
    0.7854 *
    YmIntermediateTention *
    (outsideDiameterIntermediate ** 2 - insideDiameterIntermediate ** 2);
  var plotC = Plotly.newPlot(
    "plotIntermediateCollapse",
    [
      {
        x: [0, intermediateCollapsePressure],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Collapse Load",
      },
      {
        x: [0, intermediateCollapsePressure * SFintermediateC],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },

        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
        name: "Collapse Design",
      },
      {
        x: [
          intermediateCollapsePressure * SFintermediateC + 500,
          intermediateCollapsePressure * SFintermediateC + 500,
        ],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
      },
    ],
    {
      title: "Depth vs Pressure (Collapse Pressure)",
      xaxis: {
        title: "Pressure (psi)",
      },
      yaxis: {
        title: "Depth (ft)",
      },
    }
  );
  var plotB = Plotly.newPlot(
    "plotIntermediateBurst",
    [
      {
        x: [B1Intermediate, B2Intermediate],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Burst Load",
      },
      {
        x: [B1Intermediate * SFintermediateB, B2Intermediate],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
        name: "Burst Design",
      },
      {
        x: [newIntermediateBurstResistance, newIntermediateBurstResistance],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: (function () {
          if (YmIntermediateBurst <= 40000) {
            return "H40";
          } else if (YmIntermediateBurst <= 55000) {
            return "J55/K55";
          } else if (YmIntermediateBurst <= 75000) {
            return "C75";
          } else if (YmIntermediateBurst <= 80000) {
            return "L80/N80";
          } else if (YmIntermediateBurst <= 90000) {
            return "C90";
          } else if (YmIntermediateBurst <= 95000) {
            return "C95/T95";
          } else if (YmIntermediateBurst <= 105000) {
            return "P105";
          } else if (YmIntermediateBurst <= 110000) {
            return "P110";
          } else if (YmIntermediateBurst <= 125000) {
            return "Q125";
          } else {
            return "Unrecognized Casing Grade";
          }
        })(),
      },
    ],
    {
      title: "Depth vs Pressure (Burst Pressure)",
      xaxis: { title: "Pressure (psi)" },
      yaxis: { title: "Depth (ft)" },
    }
  );
  var plotT = Plotly.newPlot(
    "plotIntermediateTention",
    [
      {
        x: [
          intermediateTentionPressure,
          bouyantWeightIntermediate + bendingForceIntermediate,
        ],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Tention Load",
      },
      {
        x: [
          intermediateTentionPressure * SFintermediateT,
          bouyantWeightIntermediate + bendingForceIntermediate,
        ],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
        name: "Tention Design",
      },
      {
        x: [newIntermediateTentionResistance, newIntermediateTentionResistance],
        y: [0, -CSDinputIntermediate],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: (function () {
          if (YmIntermediateTention <= 40000) {
            return "H40";
          } else if (YmIntermediateTention <= 55000) {
            return "J55/K55";
          } else if (YmIntermediateTention <= 75000) {
            return "C75";
          } else if (YmIntermediateTention <= 80000) {
            return "L80/N80";
          } else if (YmIntermediateTention <= 90000) {
            return "C90";
          } else if (YmIntermediateTention <= 95000) {
            return "C95/T95";
          } else if (YmIntermediateTention <= 105000) {
            return "P105";
          } else if (YmIntermediateTention <= 110000) {
            return "P110";
          } else if (YmIntermediateTention <= 125000) {
            return "Q125";
          } else {
            return "Unrecognized Casing Grade";
          }
        })(),
      },
    ],
    {
      title: "Depth vs Pressure (Tention Pressure)",
      xaxis: {
        title: "Pressure (psi)",
      },
      yaxis: {
        title: "Depth (ft)",
      },
    }
  );
}

function calculateProductionBTC() {
  var casingWeightProduction = document.getElementById(
    "casingWeightProduction"
  ).value;
  var doglegSeverityProduction = document.getElementById(
    "doglegSeverityProduction"
  ).value;
  var testPressureProduction = document.getElementById(
    "testPressureProduction"
  ).value;
  var insideDiameterProduction =
    (document.getElementById("insideDiameterProduction").value * 1) / 12;
  var outsideDiameterProduction =
    (document.getElementById("outsideDiameterProduction").value * 1) / 12;
  var CSDinputProduction = document.getElementById("CSDinputProduction").value;
  var ppgInputProduction = document.getElementById("ppgInputProduction").value;
  var formationPressureProduction = document.getElementById(
    "formationPressureProduction"
  ).value;

  var tProduction =
    (document.getElementById("casingThicknessProduction").value * 1) / 12;
  var SFproductionB = document.getElementById("safetyFactorProductionB").value;
  var SFproductionC = document.getElementById("safetyFactorProductionC").value;
  var SFproductionT = document.getElementById("safetyFactorProductionT").value;
  var gasGradientProduction = document.getElementById(
    "gasGradientProduction"
  ).value;
  var completionDensity = document.getElementById("completionDensity").value;
  var productionCollapsePressure =
    0.052 * (CSDinputProduction * ppgInputProduction);
  var B1Production =
    formationPressureProduction - gasGradientProduction * CSDinputProduction;
  var B2Production =
    B1Production +
    0.052 * completionDensity * CSDinputProduction -
    CSDinputProduction * 0.465;
  var productionBurstResistance = B1Production * SFproductionB;
  var YmProductionBurst =
    (productionBurstResistance * outsideDiameterProduction) / (tProduction * 2);
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

  var newProductionBurstResistance =
    (2 * YmProductionBurst * tProduction) / outsideDiameterProduction;
  var bouyantWeightProduction =
    casingWeightProduction * CSDinputProduction -
    ((0.052 * ppgInputProduction * CSDinputProduction * Math.PI) / 4) *
      (outsideDiameterProduction ** 2 - insideDiameterProduction ** 2);
  var bendingForceProduction =
    63 *
    casingWeightProduction *
    outsideDiameterProduction *
    doglegSeverityProduction;
  var pressureTestingProduction =
    (Math.PI * insideDiameterProduction ** 2 * testPressureProduction) / 4;
  var productionTentionPressure =
    bouyantWeightProduction +
    bendingForceProduction +
    pressureTestingProduction;
  var plot = Plotly.newPlot(
    "plotProductionCollapse",
    [
      {
        x: [0, productionCollapsePressure],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Collapse Load",
      },
      {
        x: [0, productionCollapsePressure * SFproductionC],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },

        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
        name: "Collapse Design",
      },
      {
        x: [
          productionCollapsePressure * SFproductionC + 500,
          productionCollapsePressure * SFproductionC + 500,
        ],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
      },
    ],
    {
      title: "Depth vs Pressure (Collapse Pressure)",
      xaxis: {
        title: "Pressure (psi)",
      },
      yaxis: {
        title: "Depth (ft)",
      },
    }
  );
  var plotB = Plotly.newPlot(
    "plotProductionBurst",
    [
      {
        x: [B1Production, B2Production],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Burst Load",
      },
      {
        x: [B1Production * SFproductionB, B2Production],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
        name: "Burst Design",
      },
      {
        x: [newProductionBurstResistance, newProductionBurstResistance],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: (function () {
          if (YmProductionBurst <= 40000) {
            return "H40";
          } else if (YmProductionBurst <= 55000) {
            return "J55/K55";
          } else if (YmProductionBurst <= 75000) {
            return "C75";
          } else if (YmProductionBurst <= 80000) {
            return "L80/N80";
          } else if (YmProductionBurst <= 90000) {
            return "C90";
          } else if (YmProductionBurst <= 95000) {
            return "C95/T95";
          } else if (YmProductionBurst <= 105000) {
            return "P105";
          } else if (YmProductionBurst <= 110000) {
            return "P110";
          } else if (YmProductionBurst <= 125000) {
            return "Q125";
          } else {
            return "Unrecognized Casing Grade";
          }
        })(),
      },
    ],
    {
      title: "Depth vs Pressure (Burst Pressure)",
      xaxis: { title: "Pressure (psi)" },
      yaxis: { title: "Depth (ft)" },
    }
  );
  var plotT = Plotly.newPlot(
    "plotProductionTention",
    [
      {
        x: [
          productionTentionPressure,
          bouyantWeightProduction + bendingForceProduction,
        ],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        name: "Tention Design",
      },
      {
        x: [
          productionTentionPressure * SFproductionT,
          bouyantWeightProduction + bendingForceProduction,
        ],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "red",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
        line: {
          dash: "dot",
          width: 4,
        },
      },
      {
        x: [
          productionTentionPressure * SFproductionT + 500,
          productionTentionPressure * SFproductionT + 500,
        ],
        y: [0, -CSDinputProduction],
        mode: "line",
        marker: {
          color: "blue",
          size: 10,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
        type: "line",
      },
    ],
    {
      title: "Depth vs Pressure (Tention Pressure)",
      xaxis: {
        title: "Pressure (psi)",
      },
      yaxis: {
        title: "Depth (ft)",
      },
    }
  );
}
