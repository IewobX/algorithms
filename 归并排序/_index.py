# 合并两个有序数组 (递增)

def merge(l1, l2):
    result = [];

    while(len(l1) and len(l2)):
        if(l1[0] > l2[0]):result.append(l2.pop(0))
        else:result.append(l1.pop(0))

    if(not len(l1)):result.extend(l2)
    if(not len(l1)):result.extend(l1)

    return result

print(merge([1,3,5,7], [2,4,6,8,10,12]))