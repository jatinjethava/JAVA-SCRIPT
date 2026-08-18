function twoSum(nums, target) {
    let Printed = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            let Pair = [Math.min(nums[i], nums[j]), Math.max(nums[i], nums[j])].toString();
            // console.log("check", Pair);

            if (nums[i] + nums[j] === target && !Printed.has(Pair)) {
                console.log([nums[i], nums[j]]);
                Printed.add(Pair);
                // console.log(Printed)
            }
        }
    }
    return "=" + " " + target;
}
console.log(twoSum([2, 7, 8, 1, 8, 11, 15], 9));