# 插入排序
def insertSort(arr):
    for j in range(1, len(arr)):
        key = arr[j];
        i = j - 1;
        while(i >= 0 and arr[i] > key):
            arr[i + 1] = arr[i];
            i = i - 1;
        arr[i + 1] = key;
    return arr;

print(insertSort([3,7,11,17,22,24,26,27,30,29,25,23,21,2,5,6,8,9,13,14,15,20,7]))
