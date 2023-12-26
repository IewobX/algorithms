/**
 * 安妮最近买了一台电脑，里面装了两根内存条。并且由超超帮助她安装了快看操作系统。快看操作系统有如下内存分配方式：每次分配内存时，会从两根中剩余空闲空间较大的那根去分配。如果两根内容剩余空闲空间一样，则选择第一根内存条去分配。如果两根内存条的剩余空间都不足，则会发生内存不够("Out of Memory" aka OOM)的错误。
 * 安妮非常喜欢新电脑并且马上开始撰写Hello World程序，但很快安妮发现她的程序有内存泄漏的问题。她的程序有如下的行为：从程序启动时开始算，会在第i秒（整秒）时请求 i 个字节的内存。安妮想知道她的程序运行多长时间以后会发生OOM错误
 *
 * 举例
 * 如果第一个内存条容量是2 bytes. 第二个内存条容量也是2 bytes 
 * 那么程序会在3秒后OOM，第一个内存条剩余容量为1，第二个内存条剩余容量为0
 * 再举例
 * 如果第一个内存条容量是 8 bytes. 第二个内存条容量是 11 bytes 
 * 那么程序会在6秒后OOM，第一个内存条剩余容量为0，第二个内存条剩余容量为4
 * 你能帮助安妮写一个程序算一下多少秒后她的程序会OOM吗？并且两个内存条剩余容量各是多少呢？
 */
function memoryCalc (memory1, memory2) {
    if(memory1 <= 0 || memory2 <= 0) return {memory1, memory2, time: 0};
    let time = 1;
    while(memory1 >= time || memory2 >= time) {
        memory1>=memory2 ? memory1-=time : memory2-=time;
        time ++;
    }
    return {memory1, memory2, time}
}


console.log(memoryCalc(8,11))
