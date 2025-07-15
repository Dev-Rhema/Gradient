"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import {
  // ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../Components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 173, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 160, mobile: 110 },
  { month: "August", desktop: 250, mobile: 170 },
  { month: "September", desktop: 195, mobile: 150 },
  { month: "October", desktop: 220, mobile: 180 },
  { month: "November", desktop: 180, mobile: 100 },
  { month: "December", desktop: 270, mobile: 210 },
];

const chartConfig = {
  desktop: {
    label: "Network",
    // color: "var(--chart-1)",
  },
  mobile: {
    label: "Referrals",
    // color: "var(--chart-2)",
  },
};

export function ChartBarStacked() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className="my-chart-container">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill=" #cfd4ff"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="#bab0f6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
export default ChartBarStacked;
