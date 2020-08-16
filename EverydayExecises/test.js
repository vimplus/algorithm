/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let n = nums.length;
    // 排序（升序/降序都可以），为了剪枝方便
    nums.sort((a, b) => a - b);
    let res = [];
    let hash = {};
    
    function backtrack(mark, tempList) {
        if (tempList.length === n) {
            console.log(`${mark}-tempList`, tempList)
            res.push([...tempList]);
            return;
        }
        console.log('mark:', mark)
    
        for (let i = 0; i < nums.length; i++) {

            console.log(`${mark}-${i}`, i)
            // 剪枝条件：
            // i > 0 是为了保证 nums[i - 1] 有意义；
            // !hash[i-1] 是因为 hash[i-1] 在回退的过程中被撤下了选择
            if (hash[i] || i > 0 && !hash[i-1] && nums[i-1] === nums[i]) continue;

            hash[i] = true;
    
            tempList.push(nums[i]);
            backtrack(`in`, tempList);
            tempList.pop();

            hash[i] = false;
        }
    }
    backtrack('start', []);
    return res;
};



console.log(permuteUnique([1,1,2]))