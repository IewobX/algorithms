# 归并排序
""" 归并排序 """
import math;

# merge 合并两个有序列表 (从小到大)
def merge(l1, l2):
    result = [];
    if(not l1 or not l2): return result;
    if(not len(l1)): return l2;
    if(not len(l2)): return l1;
    while(len(l1) and len(l2)):
        if(l1[0] < l2[0]): 
            result.append(l1.pop(0));
        else: 
            result.append(l2.pop(0));
    if(len(l1)): result.extend(l1);
    if(len(l2)): result.extend(l2);

    return result;

# 归并排序主函数
def mergeSort(arr):
    if(not arr or not len(arr)): return [];
    if(len(arr) == 1): return arr;
    middle = math.floor(len(arr) / 2);
    return merge(mergeSort(arr[:middle]), mergeSort(arr[middle:]));

print(mergeSort([4,2,6,5,8,13,74,8,4]))









hand = [1,6,3,5,2,4,8,7];

left = [1]; # 已经排好序的数组
right = [6,3,5,2,4,8,7]; # 其余乱序的数组

# 第一次循环    j <- 2 to n
j = 2;
i = j - 1; # i = 1
# 把hand[j] 插入到left中
left = [1,6];
right = [3,5,2,4,8,7];

# 第二次循环
j = 3
i = j - 1; # i = 2
# while hand[i] hand[j]
# A[i] = 6, key = 3
# A[i + 1] = A[i]
[1,6,6,5,2,4,8,7]
i = i - 1 # i = 1
# A[i] = 1 
# A[i + 1] = key;
[1,3,6,5,2,4,8,7]
# 把hand[j] 插入到left中
left = [1,3,6];
right = [5,2,4,8,7];

# 第三次循环

# 第四次循环




