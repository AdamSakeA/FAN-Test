import { StatsPokemon } from "@/types/Pokemon";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import FadeUp from "../animations/FadeUp";

interface HorizontalChartProps {
  payload?: StatsPokemon[];
}

interface ChartData {
  name: string;
  base_stat: number;
}

export default function HorizontalChart({ payload }: HorizontalChartProps) {
  const [stats, setStats] = useState<ChartData[]>([]);

  useEffect(() => {
    if (payload) {
      const filteredStats = payload.map((item) => ({
        name: item?.stat.name,
        base_stat: item?.base_stat,
      }));
      setStats(filteredStats);
    }
  }, [payload]);

  return (
    <FadeUp className="bg-white w-[100%] md:w-[50%] rounded-lg shadow-lg p-5 my-5">
      <h1 className="text-center font-bold text-lg">Chart</h1>
      <ResponsiveContainer width={"100%"} height={400}>
        <ComposedChart
          layout="vertical"
          data={stats}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="base_stat" barSize={20} fill="#133dbb" />
        </ComposedChart>
      </ResponsiveContainer>
    </FadeUp>
  );
}
