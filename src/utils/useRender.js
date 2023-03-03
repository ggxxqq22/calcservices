import { Line, Area, Column, Bar, Pie } from '@antv/g2plot';
const funcMap = {
  line1: renderLine,
  line2: renderMultiLine,
  area1: renderArea,
  area2: renderMultiArea,
  step1: renderStep,
  step2: renderMultiStep,
  col1: renderCol1,
  col2: renderCol2,
  col3: renderCol3,
  col4: renderCol4,
  bar1: renderBar1,
  bar2: renderBar2,
  bar3: renderBar3,
  bar4: renderBar4,
  pie: renderPie,
  cir: renderCir,
}
function renderLine(obj, ele) {
  const lineChart = new Line(ele, {
    data: obj.chartData,
    xField: obj.dataHead[1],
    yField: obj.dataHead[2],
    padding: 40
  })
  lineChart.render()
  return lineChart
}
function renderMultiLine(obj, ele) {
  const lineChart = new Line(ele, {
    data: obj.chartData,
    padding: 40,
    xField: obj.dataHead[1],
    yField: obj.dataHead[2],
    seriesField: obj.dataHead[3]
  })
  lineChart.render()
  return lineChart
}
function renderArea(obj, ele) {
  const area = new Area(ele, {
    data: obj.chartData,
    padding: 40,
    xField: obj.dataHead[1],
    yField: obj.dataHead[2],
  });
  area.render();
  return area
}
function renderMultiArea(obj, ele) {
  const area = new Area(ele, {
    data: obj.chartData,
    padding: 40,
    xField: obj.dataHead[1],
    yField: obj.dataHead[2],
    seriesField: obj.dataHead[3]
  });
  area.render();
  return area
}
function renderStep(obj, ele) {
  const area = new Line(ele, {
    data: obj.chartData,
    padding: 40,
    xField: obj.dataHead[1],
    yField: obj.dataHead[2],
    stepType: 'vh',
  });
  area.render();
  return area
}
function renderMultiStep(obj, ele) {
  const area = new Line(ele, {
    data: obj.chartData,
    padding: 40,
    xField: obj.dataHead[1],
    yField: obj.dataHead[2],
    seriesField: obj.dataHead[3],
    stepType: 'vh',
  });
  area.render();
  return area
}
function renderCol1(obj, ele) {
  const colChart = new Column(ele, {
    data: obj.chartData,
    padding: 40,
    xField: obj.dataHead[1],
    yField: obj.dataHead[2]
  })
  colChart.render()
  return colChart
}
function renderCol2(obj, ele) {
  const colChart = new Column(ele, {
    data: obj.chartData,
    isGroup: true,
    padding: 50,
    xField: obj.dataHead[1],
    yField: obj.dataHead[3],
    seriesField: obj.dataHead[2],
  })
  colChart.render()
  return colChart
}
function renderCol3(obj, ele) {
  const colChart = new Column(ele, {
    data: obj.chartData,
    isStack: true,
    padding: 50,
    xField: obj.dataHead[1],
    yField: obj.dataHead[3],
    seriesField: obj.dataHead[2],
  })
  colChart.render()
  return colChart
}
function renderCol4(obj, ele) {
  const colChart = new Column(ele, {
    data: obj.chartData,
    isStack: true,
    isPercent: true,
    padding: 50,
    xField: obj.dataHead[1],
    yField: obj.dataHead[3],
    seriesField: obj.dataHead[2],
  })
  colChart.render()
  return colChart
}
function renderBar1(obj, ele) {
  const barChart = new Bar(ele, {
    data: obj.chartData,
    padding: 40,
    xField: obj.dataHead[2],
    yField: obj.dataHead[1]
  })
  barChart.render()
  return barChart
}
function renderBar2(obj, ele) {
  const barChart = new Bar(ele, {
    data: obj.chartData,
    padding: 40,
    isGroup: true,
    xField: obj.dataHead[3],
    yField: obj.dataHead[1],
    seriesField: obj.dataHead[2],
  })
  barChart.render()
  return barChart
}
function renderBar3(obj, ele) {
  const barChart = new Bar(ele, {
    data: obj.chartData,
    padding: 40,
    isStack: true,
    xField: obj.dataHead[3],
    yField: obj.dataHead[1],
    seriesField: obj.dataHead[2],
  })
  barChart.render()
  return barChart
}
function renderBar4(obj, ele) {
  const barChart = new Bar(ele, {
    data: obj.chartData,
    padding: 40,
    isStack: true,
    isPercent: true,
    xField: obj.dataHead[3],
    yField: obj.dataHead[1],
    seriesField: obj.dataHead[2],
  })
  barChart.render()
  return barChart
}
function renderPie(obj, ele) {
  const pieChart = new Pie(ele, {
    data: obj.chartData,
    appendPadding: 30,
    padding: 40,
    angleField: obj.dataHead[2],
    colorField: obj.dataHead[1],
  })
  pieChart.render()
  return pieChart
}
function renderCir(obj, ele) {
  const pieChart = new Pie(ele, {
    data: obj.chartData,
    appendPadding: 30,
    radius: 1,
    innerRadius: 0.6,
    padding: 40,
    angleField: obj.dataHead[2],
    colorField: obj.dataHead[1],
  })
  pieChart.render()
  return pieChart
}
function myRender(chartObj, element) {
  const resChart = funcMap[chartObj.chartType](chartObj, element)
  return resChart
}
export {
  myRender
}