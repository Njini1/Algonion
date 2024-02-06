package com.e1i5.backend.domain.user.dto.response;

import lombok.Builder;

import java.util.ArrayList;

/**
 * 누적 푼 문제 개수 그래프
 */
public class AccCountGraphResponse {
    String curve;
    int width;
    String chartId;
    String categories;
    String colors;
    String data;

    @Builder
    public AccCountGraphResponse(String curve, int width, String chartId, String categories, String colors, String data) {
        this.curve = curve;
        this.width = width;
        this.chartId = chartId;
        this.categories = categories;
        this.colors = colors;
        this.data = data;
    }

    @Override
    public String toString() {
        return  "  options: {\n" +
                "      curve: " + curve + ",\n" +
                "      width: " + width +",\n" +
                "    stroke: {\n" +
                "    },\n" +
                "    chart: {\n" +
                "      id: " + chartId + ",\n" +
                "    },\n" +
                "    xaxis: {\n" +
                "      categories: " + categories +
                "    \n},\n" +
                "    colors: " + colors +
                "  \n},\n" +
                "  series: [\n" +
                "    {\n" +
                "      name: \"points\",\n" +
                "      data: " + data +
                "    \n},\n" +
                "  ]\n";
    }
}

/**
 *     this.state = {
 *       options: {
 *         stroke: {
 *           curve: 'stepline',
 *           width: 2,
 *         },
 *         chart: {
 *           id: "basic-bar",
 *         },
 *         xaxis: {
 *           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
 *         },
 *         colors: ['#9f22ff']
 *       },
 *       series: [
 *         {
 *           name: "points",
 *           data: [30, 40, 45, 50, 49, 60, 70, 91]
 *         },
 *       ],
 *     };
 */