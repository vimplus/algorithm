/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n;

    // 第一次：反转整个数组 （0 ~ length-1）
    reverse(0, n - 1);

    // 第二次：反转数组 0 ~ k-1 的范围
    reverse(0, k - 1);

    // 第三次：反转数组 k ~ n-1 的范围
    reverse(k, n - 1);

    function reverse(start: number, end: number) {
        let temp = 0;
        while (start < end) {
            temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}
