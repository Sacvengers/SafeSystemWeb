<template>
  <div>
    <div>
      <t-row
          :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      ]"
      >
        <t-col :span="6">
          <div id="module3" style="height:400px"></div>
        </t-col>
        <!--        <t-col :span="1" :offset="1">-->
        <!--          <t-divider style="height: 400px" layout="vertical"/>-->
        <!--        </t-col>-->
        <t-col :span="6">
          <div id="box" style="height:400px;"></div>
        </t-col>
      </t-row>
    </div>

    <t-divider align="center" dashed>乐御</t-divider>

    <div>
      <t-row
          :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
        { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      ]"
      >
        <t-col :span="5">
          <div id="main" style="height:350px"></div>
        </t-col>
        <t-col :span="5" :offset="1">
          <div id="module4" style="height:350px"></div>
        </t-col>
      </t-row>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  name: "DataLog",
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById('main'));
      let option = {
        // title: {
        //   text: 'ECharts 入门示例'
        // },
        tooltip: {},
        legend: {    //图例组件
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      //4.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    drawChart1() {
      let myChart = this.$echarts.init(document.getElementById('box'));
      let base = +new Date(2024, 3, 4);  //最早开始的时间
      let oneDay = 24 * 3600 * 1000;
      let date = [];
      let data = [Math.random() * 300];
      for (let i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }


      let option = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        title: {
          left: 'center',
          text: '时段内攻击情况统计'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10
          }
        ],
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
            },
            data: data
          }
        ]
      };
      option && myChart.setOption(option);
    },

    attackCount() {
      let myChart = this.$echarts.init(document.getElementById('module3'));
      let countList = [];
      let level = {};
      axios({
        url: '/record/kind_levels_count',
        method: 'get', //默认就是get,这个可以省略，
      }).then(res => {
        res.data.levels.forEach(i => {
          level = {};
          level.name = i.name + "类攻击";
          level.value = i.value;
          countList.push(level)
        })
        myChart.setOption({
          title: {
            text: '攻击类型统计',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: '8%'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '80%'],
              avoidLabelOverlap: false,
              padAngle: 8,
              itemStyle: {
                borderRadius: 10
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 30,
                  fontWeight: 'bold'
                },
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 7,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              labelLine: {
                show: false
              },
              data: countList
            }
          ]
        })
      })
    },

    drawModule4() {
      let myChart = this.$echarts.init(document.getElementById('module4'));
      let option = {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
    this.drawChart1();
    this.attackCount();  //种类统计
    this.drawModule4();
  }
}

</script>

<style scoped>

</style>
