import{fcEach,datasetFactory}from'../../../fc-core/src/lib';let TRUE_STRING='true',ONE_STRING='1',_dataSegregator=a=>{var b=[],c=[];return fcEach(a,function(a,d){a.vline===TRUE_STRING||!0===a.vline||1===a.vline||a.vline===ONE_STRING?c.push({index:d,data:a}):b.push(a)}),{catData:c,data:b}};export default function(a){let b,c,d=a.getChildren(),e=d.canvas&&d.canvas[0],f=e&&e.getChildren('vCanvas'),g=f&&f[0]||e||a,h=a.getFromEnv('dataSource'),i=h.dataset,j=h.data||i&&i[0].data;return c=_dataSegregator(j),j&&0!==j.length?void(b=a.getDSdef(),datasetFactory(g,b,'dataset',1,[c])):void a.setChartMessage()}