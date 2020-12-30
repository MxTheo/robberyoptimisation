const N = parseInt(readline());
let lootList = [];
for (let i = 0; i < N; i++) lootList.push(parseInt(readline()));

const solutionTable = {};
console.log(sumLoot(lootList, solutionTable));

function sumLoot(lootList, solutionTable) {
    if(lootList.every(n => n < 0)) return 0;
    if(lootList.length === 1) return lootList[0];

    const key = lootList.join('');
    if (key in solutionTable) return solutionTable[key];

    const lootExcluding = sumLoot(lootList.slice(1), solutionTable);
    const lootIncluding = sumLoot(lootList.slice(2), solutionTable) + lootList[0];

    const solution = lootExcluding > lootIncluding ? lootExcluding
            : lootIncluding;

    solutionTable[key] = solution;
    return solution;
}