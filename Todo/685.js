/**
 * 685. 冗余连接 II
 * https://leetcode-cn.com/problems/redundant-connection-ii/
 * 
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
    const N = edges.length + 10;

    const indegrees = [];
    for (let [start, end] of edges) {
        indegrees[end] = (indegrees[end] || 0) + 1;
    }
    let endNode= null;
    let cand1 = null;
    let cand2 = null;
    for (let i = 0; i < indegrees.length; i++) {
        if (indegrees[i] === 2) {
            endNode = i;
            break;
        }
    }
    if (endNode) {
        for (let edge of edges) {
            const [start, end] = edge;
            if (end !== endNode) continue;
            if (cand1 === null) cand1 = [start, end];
            else cand2 = [start, end];
            edge[1] = null; // 为了让这两条边最后union
        }
    }

    class UF {
        constructor(size) {
            this.parent = new Array(size).fill(-1);
            this.size = new Array(size).fill(1);
        }
        findRoot(i) {
            while (this.parent[i] !== -1) i = this.parent[i];
            return i;
        }
        union(i, j) {
            const iRoot = this.findRoot(i);
            const jRoot = this.findRoot(j);
            if (iRoot === jRoot) return [i, j];
            if (this.size[iRoot] > this.size[jRoot]) {
                this.parent[jRoot] = iRoot;
                this.size[iRoot] += this.size[jRoot];
            } else {
                this.parent[iRoot] = jRoot;
                this.size[jRoot] += this.size[iRoot];
            }
        }
    }

    const uf = new UF(N);
    for (let [start, end] of edges) {
        if (end == null) continue;
        const t = uf.union(start, end);
        if (t) return t; // 情况2 会在这里输出
    }
    if (endNode) { // 情况1 会在这里输出
        const t1 = uf.union(cand1[0], cand1[1]);
        if (t1) return t1;
        const t2 = uf.union(cand2[0], cand2[1]);
        if (t2) return t2;
    }

    return cand2; // 情况3 会在这里输出
};