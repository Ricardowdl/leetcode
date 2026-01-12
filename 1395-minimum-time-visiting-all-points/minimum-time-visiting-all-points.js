/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let res = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const xcha = Math.abs(points[i][0] - points[i + 1][0]);
    const ycha = Math.abs(points[i][1] - points[i + 1][1]);
    res = res + Math.max(xcha, ycha);
  }
  return res
};
