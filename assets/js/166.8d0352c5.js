(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{446:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("1."),t("a",{attrs:{href:"https://www.nowcoder.com/practice/4dda66e385c443d8a11570a70807d250",target:"_blank",rel:"noopener noreferrer"}},[s._v("题目链接"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n  cust_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  order_num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("quantity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" item_price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" OrderTotal\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n  Customers\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" Orders "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cust_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" OrderItems "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("order_num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("\n  cust_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  order_num\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v("\n  cust_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  order_num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ol",[t("li",[t("p",[t("code",[s._v("cust_name")]),s._v("和"),t("code",[s._v("order_num")]),s._v("为非聚类而在不使用"),t("code",[s._v("group by")]),s._v("的聚合函数中，有一个聚合函数"),t("code",[s._v("sum")]),s._v("，其他的必须也使用聚合函数，所以添加了这两列的"),t("code",[s._v("group by")]),s._v("，而在"),t("code",[s._v("select")]),s._v("语句中不使用"),t("code",[s._v("sum")]),s._v("，即没有聚合函数，则可以在后来不用将这两列进行"),t("code",[s._v("group by")]),s._v("，总结：参数查询列表要么全为聚类，要么全不为聚类")])]),s._v(" "),t("li",[t("p",[s._v("上面的代码中使用了"),t("code",[s._v("using()")]),s._v("，关于"),t("code",[s._v("using")]),s._v("的用法")]),s._v(" "),t("p",[t("code",[s._v("using")]),s._v("相当于"),t("code",[s._v("left/right join")]),s._v("中的"),t("code",[s._v("on")]),s._v("，例如有2个表"),t("code",[s._v("a")]),s._v("和"),t("code",[s._v("b")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("相当于")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n\ta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n\ttest1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);