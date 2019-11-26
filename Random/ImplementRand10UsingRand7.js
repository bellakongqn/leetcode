/**
 * 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。
   不要使用系统的 Math.random() 方法。

   解析：
   首先需要注意的是，数字1-10应该具有相同的生成概率。由于我们只能使用rand7函数，所以思路必然是组合使用rand7函数
   那么通过 x = (rand7()-1)*7 + rand7()可以获取数字 1 到 49
   对于数字x： 1---40，我们可以通过 （x - 1) % 10 + 1 来均等的生成1到10 的整数：
   对于41 --- 49，比较简单的处理方式是直接抛弃

   要保证rand10()生成的随机数是1-10的均匀分布，可以先产生1-10*n的均匀分布，假设x是1-10*n区间上的一个随机数，那么x%10+1就是均匀分布在1-10区间上的整数，下面就用rand7()去生成1-10*n的均匀分布

    步骤
    A事件：rand7()产生{1,2,3,4,5,6,7}的离散集合中的一个，所以rand7()-1产生{0,1,2,3,4,5,6}，每个数字的产生的概率为1/7

    B事件：(rand7()-1)*7产生{0,7,14,21,28,35,42}，其中每个数字产生的概率为1/7

    A,B事件相互独立：所以(rand7()-1)*7+rand7()生成1-49之间的随机数，且概率均为1/7 * 1/7 = 1/49，即均匀分布

    截取10的整数倍数：1-49是均匀分布的，所以1-40也是均匀分布的，所以截取1-40之间的数，执行x%10+1即可满足要求

*/
var rand10 = function() {
    while(1){
        var y = (rand7()-1)*7;
        var x = rand7();
        
        if(x+y<=40){
            return (x+y)%10+1;
        }
    }
};