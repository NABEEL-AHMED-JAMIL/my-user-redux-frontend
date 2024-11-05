import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

/**
 * @author Nabeel Ahmed
 */
@Injectable({
    providedIn: 'root'
})
export class AppDashboardThemeService {

    constructor(private http: HttpClient) { }

    public loadTheme(): void {
        this.http.get('assets/infographic.json')
            .subscribe((theme: any) => {
                echarts.registerTheme('shine', theme);
            });
    }

    public initChart(elementId: string, chartOptions: EChartsOption): void {
        const chartDom = document.getElementById(elementId);
        if (chartDom) {
            // Check if an instance already exists
            const existingChart = echarts.getInstanceByDom(chartDom);
            if (existingChart) {
                console.log('Chart instance already exists, updating options.');
                // If the chart instance already exists, just update the options
                existingChart.setOption(chartOptions);
            } else {
                console.log('Initializing new chart instance.');
                // Initialize a new chart if no instance exists
                const myChart = echarts.init(chartDom, 'shine'); // Use 'shine' if loaded
                myChart.setOption(chartOptions);
            }
        } else {
            console.error(`Element with ID ${elementId} not found.`);
        }
    }

    public fillPieChartPayload(name: any, data: any): EChartsOption {
        return {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: false
            },
            series: [
                {
                    name: name,
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['50%', '50%'],
                    data: data,
                    label: {
                        formatter: '{b}: ({c})'
                    }
                }
            ]
        };
    }

    public fillHalfPieDonuChartPayload(name: any, data: any): EChartsOption {
        return {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: false
            },
            series: [
                {
                    name: name,
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['50%', '50%'],
                    startAngle: 180,
                    endAngle: 360,
                    data: data,
                    label: {
                        formatter: '{b}: ({c})'
                    }
                }
            ]
        };
    }

    public fillAxisChartPayload(data: any): EChartsOption {
        // Check if data is defined and is an array
        if (!data || !Array.isArray(data)) {
            return {}; // Handle the error case
        }
        return {
            title: {
                show: false
            },
            toolbox: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '7%',
                right: '7%',
                top: '12%',
                bottom: '15%'
            },
            dataZoom: [],
            xAxis: {
                data: data.map((object: any) => object.key),
                silent: false,
                splitLine: {
                    show: false
                },
                splitArea: {
                    show: false
                }
            },
            yAxis: {
                splitArea: {
                    show: false
                }
            },
            series: [
                {
                    type: 'line',   // Use 'line' for an area chart
                    data: data.map((object: any) => object.value),
                    areaStyle: {}  // Add this to fill the area
                }
            ]
        }
    }

    public fillBarStackPayload(daysInMonth: any, series: any): EChartsOption {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    let tooltip = `At Day: ${params[0].axisValue}<br/>`;
                    params.forEach((item: any) => {
                        if (item.value !== '-') {
                            tooltip += `${item.seriesName}: ${item.value}<br/>`;
                        }
                    });
                    return tooltip;
                },
            },
            legend: {
                show: false
            },
            grid: {
                left: '3%',
                right: '3%',
                top: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: daysInMonth,
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                    align: 'center',
                    margin: 10
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: series as any
        };
    }

    public fillTreePolylineEdgePayload(name: any, data: any): EChartsOption {
        return {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    name: name,
                    data: [data],
                    top: '5%', // Increase to provide more space
                    left: '5%',
                    bottom: '5%',
                    right: '5%',
                    layout: 'radial',
                    orient: 'horizontal',
                    symbol: 'emptyCircle',
                    symbolSize: 10,
                    edgeShape: 'curve',
                    initialTreeDepth: 2,
                    lineStyle: {
                        width: 1
                    },
                    leaves: {
                        label: {
                            position: 'top',
                            verticalAlign: 'top',
                            align: 'center'
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 150,
                    animationDurationUpdate: 750
                }
            ]
        };              
    }

    public fillCandlestickLargeStockPayload(data: any): EChartsOption {
        const upColor = '#ec0000';
        const upBorderColor = '#8A0000';
        const downColor = '#00da3c';
        const downBorderColor = '#008F28';
        return {
            dataset: {
                source: data
            },
            title: {
                show: false,
                text: 'Ballistic Stock Data',
                left: 'center',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                formatter: function (params) {
                    const [candle, volume] = params;
                    return `
                        Date: ${candle.name}<br/>
                        Open: ${candle.data[1]}<br/>
                        High: ${candle.data[2]}<br/>
                        Low: ${candle.data[3]}<br/>
                        Close: ${candle.data[4]}<br/>
                        Volume: ${candle.data[5]}
                    `;
                }
            },
            grid: [
                {
                    top: '5%',
                    left: '5%',
                    right: '3%',
                    bottom: 200
                },
                {
                    left: '5%',
                    right: '3%',
                    height: 100,
                    bottom: 80
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        onZero: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        formatter: value => new Date(value).toLocaleDateString()
                    },
                    min: 'dataMin',
                    max: 'dataMax'
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    boundaryGap: false,
                    axisLine: {
                        onZero: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    min: 'dataMin',
                    max: 'dataMax'
                }
            ],
            yAxis: [
                {
                    scale: true,
                    splitArea: {
                        show: true
                    }
                },
                {
                    scale: true,
                    gridIndex: 1,
                    splitNumber: 5,
                    axisLine: {
                        onZero: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                }
            ],
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex: [0, 1],
                    start: 10,
                    end: 100
                },
                {
                    show: true,
                    xAxisIndex: [0, 1],
                    type: 'slider',
                    start: 10,
                    end: 100
                }
            ],
            visualMap: {
                show: false,
                seriesIndex: 1,
                dimension: 6,
                pieces: [
                    {
                        value: 1,
                        color: upColor
                    },
                    {
                        value: -1,
                        color: downColor
                    }
                ]
            },
            series: [
                {
                    type: 'candlestick',
                    itemStyle: {
                        color: upColor,
                        color0: downColor,
                        borderColor: upBorderColor,
                        borderColor0: downBorderColor
                    },
                    barWidth: '60%',
                    encode: {
                        x: 0,
                        y: [1, 4, 3, 2]
                    }
                },
                {
                    name: 'Volume',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle: {
                        color: params => params.data[6] === 1 ? upColor : downColor
                    },
                    large: true,
                    encode: {
                        x: 0,
                        y: 5
                    }
                }
            ]
        };        
    } 

    public fillAreaPiecesStockPayload(data: any): EChartsOption {
        return {
            xAxis: {
                type: 'category',
                boundaryGap: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '10%']
            },
            grid: {
                left: '3%',
                right: '3%',
                top: '5%',
                bottom: '5%',
                containLabel: true
            },
            visualMap: {
                type: 'piecewise',
                show: false,
                dimension: 0,
                seriesIndex: 0,
            },
            tooltip: {
                // Set tooltip to null to disable it
                show: false
            },
            series: [
                {
                    type: 'line',
                    smooth: 0.6,
                    symbol: 'none',
                    lineStyle: {
                        color: '#5470C6',
                        width: 5
                    },
                    areaStyle: {},
                    data: data
                }
            ]
        }
    }
}