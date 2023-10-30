(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{423:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[t._v("#")]),t._v(" 线程池")]),t._v(" "),s("p",[t._v("线程池就是提前创建若干个线程，如果有任务需要处理，线程池里的线程就会处理任务，处理完之后线程并不会被销毁，而是等待下一个任务。")]),t._v(" "),s("p",[t._v("为什么要使用线程池？")]),t._v(" "),s("p",[t._v("如果用户每发起一个请求，后台就创建一个新线程来处理，下次新任务来了又要创建新线程，而"),s("strong",[t._v("创建新线程的 开销是很大的")]),t._v("，这样会严重影响系统的性能。")]),t._v(" "),s("p",[s("strong",[t._v("使用线程池的好处")]),t._v("：")]),t._v(" "),s("p",[t._v("线程池的好处是"),s("strong",[t._v("减少在创建和销毁线程上所消耗的时间以及系统资源的开销，解决资源不足的问 题")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("如果不使用线程池，有可能造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"创建线程池对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建线程池对象"}},[t._v("#")]),t._v(" 创建线程池对象")]),t._v(" "),s("p",[t._v("JAVA中创建线程池主要有两类方法，")]),t._v(" "),s("p",[t._v("一类是通过"),s("code",[t._v("Executors")]),t._v("工厂类提供的方法，该类提供了4种不同的线程池可供使用。另一类是通过"),s("code",[t._v("ThreadPoolExecutor")]),t._v("类进行自定义创建。")]),t._v(" "),s("p",[t._v("注意："),s("code",[t._v("Executors")]),t._v("的底层其实也是基于线程池的实现类"),s("code",[t._v("ThreadPoolExecutor")]),t._v("创建线程池对象的")]),t._v(" "),s("h2",{attrs:{id:"executors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#executors"}},[t._v("#")]),t._v(" Executors")]),t._v(" "),s("p",[s("strong",[t._v("方式一：使用"),s("code",[t._v("Executors")]),t._v("（线程池的工具类）调用方法返回不同特点的线程池对象")])]),t._v(" "),s("p",[t._v("线程池的工具类通过调用方法返回不同类型的线程池对象")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221028185141274.png",alt:"image-20221028185141274"}})]),t._v(" "),s("blockquote",[s("p",[t._v("根据阿里巴巴开法手册规定")]),t._v(" "),s("p",[t._v("线程池不允许使用 "),s("code",[t._v("Executors")]),t._v(" 去创建，而是通过 "),s("code",[t._v("ThreadPoolExecutor")]),t._v(" 的方式，这 样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险。")]),t._v(" "),s("p",[t._v("说明："),s("code",[t._v("Executors")]),t._v(" 返回的线程池对象的弊端如下：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("FixedThreadPool")]),t._v(" 和 "),s("code",[t._v("SingleThreadPool")]),t._v("： 允许的请求队列长度为 "),s("code",[t._v("Integer.MAX_VALUE")]),t._v("，可能会堆积大量的请求，从而导致 "),s("code",[t._v("OOM")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("CachedThreadPool")]),t._v("： 允许的创建线程数量为 "),s("code",[t._v("Integer.MAX_VALUE")]),t._v("，可能会创建大量的线程，从而导致 "),s("code",[t._v("OOM(OutOfMemoryError)")]),t._v("(也就是内存不足)。")])])]),t._v(" "),s("p",[s("code",[t._v("Executors")]),t._v(" 并不适合做大型互联网场景的线程池方案，否则可能会出现"),s("code",[t._v("OOM")]),t._v("(内存不足)问题❌")]),t._v(" "),s("p",[t._v("建议使用"),s("code",[t._v("ThreadPoolExecutor")]),t._v("来指定线程池参数，这样可以明确线程池的运行规则，规避资源耗尽的风险。✅")]),t._v(" "),s("h2",{attrs:{id:"executorservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#executorservice"}},[t._v("#")]),t._v(" ExecutorService")]),t._v(" "),s("p",[s("strong",[t._v("方式二：使用"),s("code",[t._v("ExecutorService")]),t._v("的实现类"),s("code",[t._v("ThreadPoolExecutor")]),t._v("自创建一个线程池对象")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" corePoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maximumPoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" keepAliveTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockingQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" workQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadFactory")]),t._v(" threadFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RejectedExecutionHandler")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("上面7个参数的作用")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("maximumPoolSize")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("核心线程数的最大值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("maximumPoolSize")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("线程数最大值(核心线程 + 临时线程)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("keepAliveTime")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("临时线程的存活时间")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("unit")]),t._v("("),s("code",[t._v("TimeUnit.SECONDS")]),t._v("表示秒)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("keepAliveTime")]),t._v("的单位")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("workQueue")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("任务(阻塞)队列，用来储存等待执行的任务数量")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("threadFactory")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("线程工厂(用来创建线程)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("handler")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("拒绝策略")])])])]),t._v(" "),s("p",[t._v("第4个参数"),s("code",[t._v("unit")]),t._v("的可选值如下")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("TimeUnit.DAYS")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("天")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("TimeUnit.HOURS")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("小时")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("TimeUnit.MINUTES")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("分")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("TimeUnit.SECONDS")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("秒")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("TimeUnit.MILLISECONDS")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("毫秒")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("TimeUnit.MICROSECONDS")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("微妙")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("TimeUnit.NANOSECONDS")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("纳秒")])])])]),t._v(" "),s("p",[t._v("第5个参数"),s("code",[t._v("workQueue")]),t._v("的可选值如下")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("参数")])]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("描述")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[s("code",[t._v("ArrayBlockingQueue")])])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("数组阻塞队列，底层数据结构是数组，需要指定队列的大小。")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[s("code",[t._v("LinkedBlockingQueue")])])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("链式阻塞队列，底层数据结构是链表，默认大小是"),s("code",[t._v("Integer.MAX_VALUE")]),t._v("，也可以指定大小。")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("SynchronousQueue")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("同步队列，内部容量为0，不存储元素的阻塞队列，即直接提交给线程不保持它们。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("PriorityBlockingQueue")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("支持优先级排序的无界阻塞队列。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("DelayQueue")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("使用优先级队列实现的无界阻塞队列，只有在延迟期满时才能从中提取元素。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("LinkedTransferQueue")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由链表结构组成的无界阻塞队列，"),s("code",[t._v("SynchronousQueue")]),t._v("类似含有非阻塞方法。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("LinkedBlockingDeque")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("由链表结构组成的双向阻塞队列。")])])])]),t._v(" "),s("p",[t._v("第7个参数"),s("code",[t._v("handler")]),t._v("的可选值如下")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[s("code",[t._v("AbortPolicy")]),t._v("(默认拒绝策略)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("拒绝任务并抛出异常")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("CallerRunsPolicy")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("重试提交当前的任务，即再次调用运行该任务的execute()方法。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("DiscardOldestPolicy")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("抛弃队列头部（最旧）的一个任务，并执行当前任务。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("DiscardPolicy")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("丢弃新来的任务，但是不抛出异常")])])])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("当线程数小于核心线程数时，创建线程。")])]),t._v(" "),s("li",[s("p",[t._v("当线程数大于等于核心线程数，且任务队列未满时，将任务放入任务队列。")])]),t._v(" "),s("li",[s("p",[t._v("当线程数大于等于核心线程数，且任务队列已满：")]),t._v(" "),s("p",[t._v("若线程数小于最大线程数，创建线程。")]),t._v(" "),s("p",[t._v("若线程数等于最大线程数，抛出异常，拒绝任务。")])])]),t._v(" "),s("p",[s("strong",[t._v("什么时候创建临时线程？")])]),t._v(" "),s("p",[t._v("当任务提交的时候核心线程都在忙，任务队列也满了，此时还可以创建临时线程的时候，才会创建临时线程。")]),t._v(" "),s("p",[s("strong",[t._v("什么时候执行拒绝策略？")])]),t._v(" "),s("p",[t._v("核心线程和临时线程都在忙，任务队列也满了，还有新的任务过来时会拒绝任务。")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("ThreadPoolExecutor")]),t._v("创建线程池示例")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" pool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  核心线程数")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  最大线程数(核心线程数 + 临时线程数)")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  临时线程的存活时间")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECONDS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  临时线程的存活时间的单位(这里为秒)")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayBlockingQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务(阻塞)队列的最大任务数")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultThreadFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  线程工厂")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AbortPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  拒绝策略")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟线程池处理16个任务")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"线程执行了第"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"个任务"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])]),s("p",[t._v("运行结果")]),t._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v('Exception in thread "main" java.util.concurrent.RejectedExecutionException: Task java.util.concurrent.FutureTask@6acbcfc0[Not completed, task = java.util.concurrent.Executors$RunnableAdapter@15aeb7ab[Wrapped task = com.zq.myStudy.多线程.Test8$1@7b23ec81]] rejected from java.util.concurrent.ThreadPoolExecutor@5f184fc6[Running, pool size = 5, active threads = 5, queued tasks = 10, completed tasks = 0]\npool-1-thread-4线程执行了第14个任务\npool-1-thread-5线程执行了第15个任务\npool-1-thread-1线程执行了第1个任务\npool-1-thread-1线程执行了第4个任务\npool-1-thread-1线程执行了第6个任务\npool-1-thread-4线程执行了第5个任务\npool-1-thread-1线程执行了第8个任务\npool-1-thread-4线程执行了第9个任务\npool-1-thread-1线程执行了第10个任务\npool-1-thread-4线程执行了第11个任务\npool-1-thread-5线程执行了第7个任务\npool-1-thread-4线程执行了第13个任务\npool-1-thread-1线程执行了第12个任务\npool-1-thread-3线程执行了第3个任务\npool-1-thread-2线程执行了第2个任务\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("上面的线程池执行的最大线程数为 最大线程数 + 任务队列任务的最大值 = 15 < 16")]),t._v(" "),s("p",[t._v("所以有一个任务会被拒绝，根据代码中的拒绝策略，策略出现异常。")]),t._v(" "),s("p",[s("code",[t._v("ExecutorService")]),t._v("的常用方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Future submit(Callable task)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("执行任务，返回该任务的"),s("code",[t._v("future")]),t._v("对象"),s("br"),t._v("一般拿来执行 "),s("code",[t._v("Callable")]),t._v(" 任务")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("void execute(Runnable command)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("执行任务/命令，没有返回值，一般用来执行 "),s("code",[t._v("Runnable")]),t._v(" 任务")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("void shutdown()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("等任务执行完毕后关闭线程池")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("List shutdownNow()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("立刻关闭线程池，停止正在执行的任务，"),s("br"),t._v("并返回队列中未执行的任务")])])])]),t._v(" "),s("p",[s("strong",[s("code",[t._v("execute()")]),t._v("和"),s("code",[t._v("submit()")]),t._v("的区别")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("处理任务类型")]),t._v(" "),s("p",[s("code",[t._v("execute()")]),t._v("和"),s("code",[t._v("submit()")]),t._v("都属于线程池的方法，"),s("code",[t._v("execute()")]),t._v("只能提交"),s("code",[t._v("Runnable()")]),t._v("类型的任务，而"),s("code",[t._v("submit()")]),t._v("既能提交"),s("code",[t._v("Runnable")]),t._v("类型任务也能提交"),s("code",[t._v("Callable")]),t._v("类型任务。")])]),t._v(" "),s("li",[s("p",[t._v("任务执行异常")]),t._v(" "),s("p",[s("code",[t._v("execute()")]),t._v("会直接抛出任务执行时的异常，"),s("code",[t._v("submit()")]),t._v("会吃掉异常，可通过"),s("code",[t._v("Future")]),t._v("的"),s("code",[t._v("get()")]),t._v("方法将任务执行时的异常重新抛出。")])])]),t._v(" "),s("p",[t._v("修改上面的代码示例")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟线程池处理16个任务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"线程执行了第"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"个任务"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务数大于13会启动临时线程,因此任务数13到任务数15之间的时候")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  剩余等待任务数都是10,有3个核心2个临时在处理任务")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdownNow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  10")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h2",{attrs:{id:"并发和并行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发和并行"}},[t._v("#")]),t._v(" 并发和并行")]),t._v(" "),s("p",[t._v("CPU会轮询为系统的每个线程服务，由于CPU切换的速度很快，给我们的感觉这些线程在同时执行，这就是并发。")]),t._v(" "),s("p",[t._v("在同一个时刻上，同时有多个线程在被CPU处理并执行。")]),t._v(" "),s("p",[t._v("并发：CPU分时轮询的执行线程")]),t._v(" "),s("p",[t._v("并行：同一个时刻同时在执行")]),t._v(" "),s("h2",{attrs:{id:"线程的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程的生命周期"}},[t._v("#")]),t._v(" 线程的生命周期")]),t._v(" "),s("p",[t._v("线程的6中状态")]),t._v(" "),s("p",[t._v("Java总共定义了6种状态")]),t._v(" "),s("p",[t._v("6种状态都定义在Thread类的内部枚举类中。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NEW")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNNABLE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLOCKED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WAITING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TIMED_WAITING")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TERMINATED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221028225251669.png",alt:"image-20221028225251669"}})]),t._v(" "),s("p",[t._v("线程的6中状态相互转换")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221028224830554.png",alt:"image-20221028224830554"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/demo223/pictures/master/img/image-20221028225349518.png",alt:"image-20221028225349518"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);