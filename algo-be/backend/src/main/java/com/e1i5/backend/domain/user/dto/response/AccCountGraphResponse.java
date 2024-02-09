package com.e1i5.backend.domain.user.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

/**
 * 누적 푼 문제 개수 그래프
 */
@Getter
public class AccCountGraphResponse {
//    String curve;
//    int width;
//    String chartId;
    String[] categories;
//    String colors;
    long[] data;
//    @Override
//    public String toString() {
//        return  "  options: {\n" +
//                "      curve: " + curve + ",\n" +
//                "      width: " + width +",\n" +
//                "    stroke: {\n" +
//                "    },\n" +
//                "    chart: {\n" +
//                "      id: " + chartId + ",\n" +
//                "    },\n" +
//                "    xaxis: {\n" +
//                "      categories: " + categories +
//                "    \n},\n" +
//                "    colors: " + colors +
//                "  \n},\n" +
//                "  series: [\n" +
//                "    {\n" +
//                "      name: \"points\",\n" +
//                "      data: " + data +
//                "    \n},\n" +
//                "  ]\n";
//    }

    @Builder
    public AccCountGraphResponse(String[] categories, long[] data) {
        this.categories = categories;
        this.data = data;
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