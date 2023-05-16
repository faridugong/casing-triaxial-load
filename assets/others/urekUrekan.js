// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Functions</h2>

// <p>This example calls a function which performs a calculation, and returns the result:</p>

// <p id="conductorCollapse"></p>

// <script>
// function collapsePressure(mudlineDepth, pm, CSD) {
//   return 0.45 * mudlineDepth + 0.052 * pm * CSD;
// }
// document.getElementById("conductorCollapse").innerHTML = collapsePressure(4, 3, 0);
// </script>

// </body>
// </html>

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Functions</h2>

// <p>This example calls a function which performs a calculation, and returns the result:</p>

// <p id="surfaceCollapse"></p>

// <script>
// function collapsePressure(mudlineDepth, pm, CSD) {
//   return 0.052 * pm * CSD;
// }
// document.getElementById("surfaceCollapse").innerHTML = collapsePressure(4, 11, 4038);
// </script>

// </body>
// </html>

// <body>

// <h2>JavaScript Functions</h2>

// <p>This example calls a function which performs a calculation, and returns the result:</p>

// <p id="B1"></p>
// <p id="B2"></p>

// <script>
// function B1(Pf, G, CSD) {
//   return Pf - G * CSD;
// }
// document.getElementById("B1").innerHTML = B1(4, 0.1, 4038);

// function B2(B1, Pp, CSD) {
//   return  B1 + 0.052 * Pp * CSD - CSD * 0.465;
// }
// document.getElementById("B2").innerHTML = B2(2, 1, 4038);
// </script>

// //piye carane nglebokke B1 neng rumus B2?

// </body>
// </html>
