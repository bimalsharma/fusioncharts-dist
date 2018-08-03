import{normalizeTarget}from'./helper';import SymbolClass from'./symbolclass';import ListContainerManager from'./listContainerManager';import{POSITION_BOTTOM,POSITION_TOP,allNodes}from'./default-attrs';import domEvtHandler from'../dom/dom-event';import{isIE11,hasSVG}from'../lib/lib';let UNDEF,DEFAULT_TIMEOUT=300;class SymbolWithContext extends SymbolClass{configure(a,b,c,d){var f,e,g=this.config,h=window.document;super.configure(a,UNDEF,b,c),g.chartId=d,g.rawContextDefinitation=UNDEF,e=new ListContainerManager,e.configure(g.position,d),g.listContainerManager=e.init(c),f=g.listContainerManager.getFirstContainer(),g.evt.hover=[function(a){f.show(normalizeTarget(a.target||a.fromElement,a))},function(a){a.relatedTarget||!hasSVG?f.hide(DEFAULT_TIMEOUT,a.target):isIE11&&!g.docEventOutput&&(g.docEventOutput=domEvtHandler.listen(h,'mousedown',function(a){f.hide(DEFAULT_TIMEOUT,a.target),g.docEventOutput.unlisten(),g.docEventOutput=UNDEF}))}]}getListRefernce(){return this.config.listContainerManager}attachEventHandler(a){var b=this.config.evt,c=a.tooltext;c&&(b.tooltext=c)}getLogicalSpace(){var a=this.config.listContainerManager.getFirstContainer(),b=a.config.atomicLists;return b&&0===b.length?{width:0,height:0}:SymbolClass.prototype.getLogicalSpace.call(this)}draw(){var a,b=this.config,c=b.listContainerManager.getFirstContainer(),d=c.config.atomicLists;return d&&0===d.length?(this.hide(),{getBBox:function(){return{width:0,height:0}}}):(a=SymbolClass.prototype.draw.apply(this,arguments),SymbolWithContext.allNodes.push(b.node),a)}dispose(){var a=this.config;a.listContainerManager&&a.listContainerManager.dispose(),a.listContainerManager=UNDEF,SymbolClass.prototype.dispose.call(this)}}SymbolWithContext.POSITION_TOP=POSITION_TOP,SymbolWithContext.POSITION_BOTTOM=POSITION_BOTTOM,SymbolWithContext.allNodes=allNodes;export default SymbolWithContext;