(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{319:function(v,_,e){"use strict";e.r(_);var a=e(14),o=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("请你说说HashMap和Hashtable的区别？")])]),v._v(" "),_("p",[v._v("得分点")]),v._v(" "),_("ul",[_("li",[v._v("线程安全")]),v._v(" "),_("li",[_("code",[v._v("null")])]),v._v(" "),_("li",[v._v("数据结构")])]),v._v(" "),_("p",[_("code",[v._v("Hashtable")]),v._v("在实现Map接口时保证了线程安全性，而"),_("code",[v._v("HashMap")]),v._v("则是非线程安全的。所以，"),_("code",[v._v("Hashtable")]),v._v("的性能不如"),_("code",[v._v("HashMap")]),v._v("，因为为了保证线程安全它牺牲了一些性能")]),v._v(" "),_("p",[_("code",[v._v("Hashtable")]),v._v(" 不允许存入"),_("code",[v._v("null")]),v._v("，无论是以"),_("code",[v._v("null")]),v._v("作为"),_("code",[v._v("key")]),v._v("或"),_("code",[v._v("value")]),v._v("，都会引发异常。而"),_("code",[v._v("HashMap")]),v._v("是允许存入null的，无论是以"),_("code",[v._v("null")]),v._v("作为"),_("code",[v._v("key")]),v._v("或"),_("code",[v._v("value")]),v._v("，都是可以的。")]),v._v(" "),_("p",[_("code",[v._v("HashTable")]),v._v("，底层数据结构为数组+链表，"),_("code",[v._v("HashMap")]),v._v("的底层数据结构为数组+链表/红黑树")]),v._v(" "),_("p",[v._v("加分回答")]),v._v(" "),_("p",[v._v("虽然"),_("code",[v._v("Hashtable")]),v._v("是线程安全的，但仍然不建议在多线程环境下使用"),_("code",[v._v("Hashtable")]),v._v("。因为它是一个古老的API，从"),_("code",[v._v("Java 1.0")]),v._v("开始就出现了，它的同步方案还不成熟，性能不好。如果要在多线程环下使用"),_("code",[v._v("HashMap")]),v._v("，建议使用"),_("code",[v._v("ConcurrentHashMap")]),v._v("。它不但保证了线程安全，也通过降低锁的粒度提高了并发访问时的性能。")])])}),[],!1,null,null,null);_.default=o.exports}}]);