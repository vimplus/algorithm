# 十大经典排序算法——归并排序

## 基本思想

归并排序（MERGE-SORT）是利用**归并**的思想实现的排序方法，该算法采用经典的**分治**（divide-and-conquer）策略（分治法将问题**分**(divide)成一些小的问题然后递归求解，而**治(conquer)**的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。

### 分而治之

![img](http://tva1.sinaimg.cn/large/0060lm7Tly1g5c6yfpozoj31360u00z8.jpg)

可以看到这种结构很像一棵完全二叉树，本文的归并排序我们采用递归去实现（也可采用迭代的方式去实现）。**分**阶段可以理解为就是递归拆分子序列的过程，递归深度为`log2n`。



### 合并相邻有序子序列

再来看看**治**阶段，我们需要将两个已经有序的子序列合并成一个有序序列，比如上图中的最后一次合并，要将`[4,5,7,8]`和`[1,2,3,6]`两个已经有序的子序列，合并为最终序列`[1,2,3,4,5,6,7,8]`，来看下实现步骤。

![img](http://tva1.sinaimg.cn/large/0060lm7Tly1g5c6yg4b8dj30xw0u0n33.jpg)



## 代码实现

![img](http://tva1.sinaimg.cn/large/0060lm7Tly1g5c6xf9kvnj30u019yqbw.jpg)