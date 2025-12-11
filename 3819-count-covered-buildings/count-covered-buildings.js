/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
    //其实麻烦一点，对每个建筑都进行一次判断也可以
    //先对每个方向都做一次排序

    //每个方向上，除了最外围的两个，其他都应该作为被遮挡的
    const hengxiang = Array.from({ length: n + 1 }, () => []);
    const shuxiang = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < buildings.length; i++) {
        const [buildHeng, buildShu] = buildings[i];
        hengxiang[buildHeng].push(buildShu);
        shuxiang[buildShu].push(buildHeng);
    }

    //对每个方向上的建筑进行排序
    for (let i = 0; i <= n; i++) {
        hengxiang[i].sort((a, b) => a - b);
        shuxiang[i].sort((a, b) => a - b);
    }

    //找出被遮挡的建筑
    const hengxiangCovered = Array.from({ length: n + 1 }, () => []);
    const shuxiangCovered = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i <= n; i++) {
        if (hengxiang[i].length > 2) {
            //有遮挡
            for (let j = 1; j < hengxiang[i].length - 1; j++) {
                hengxiangCovered[i].push(hengxiang[i][j]);
            }
        }
        if (shuxiang[i].length > 2) {
            //有遮挡
            for (let j = 1; j < shuxiang[i].length - 1; j++) {
                shuxiangCovered[i].push(shuxiang[i][j]);
            }
        }
    }
    console.log('hengxiangCovered', hengxiangCovered);
    console.log('shuxiangCovered', shuxiangCovered);
    // 基于横向上的建筑做判断， 横向上被遮挡的建筑，查询竖向上是否也被遮挡
    let res = 0;
    for (let i = 0; i <= n; i++) {
        if(hengxiangCovered[i].length !== 0){
            //有遮挡，找竖向那边有没有相同的遮挡
            const _hengxiangCoverd = hengxiangCovered[i];
            // 找竖向上 相同横向的被遮挡建筑
            //[2]
            for(let j = 0; j < _hengxiangCoverd.length; j++){
                
            const _shuxiangCovered = shuxiangCovered[_hengxiangCoverd[j]];
                if(_shuxiangCovered.includes(i)){
                    res++;
                }

            }
        }
    }
    return res
};