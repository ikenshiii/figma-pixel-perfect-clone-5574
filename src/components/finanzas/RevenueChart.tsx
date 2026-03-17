import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Ene', ingresos: 4200, gastos: 2400 },
  { month: 'Feb', ingresos: 3800, gastos: 1398 },
  { month: 'Mar', ingresos: 5100, gastos: 3800 },
  { month: 'Abr', ingresos: 4780, gastos: 3908 },
  { month: 'May', ingresos: 5890, gastos: 4800 },
  { month: 'Jun', ingresos: 6390, gastos: 3800 },
  { month: 'Jul', ingresos: 5490, gastos: 4300 },
  { month: 'Ago', ingresos: 6100, gastos: 3200 },
  { month: 'Sep', ingresos: 5700, gastos: 2900 },
  { month: 'Oct', ingresos: 6800, gastos: 3100 },
  { month: 'Nov', ingresos: 7200, gastos: 3600 },
  { month: 'Dic', ingresos: 7800, gastos: 4100 },
];

export const RevenueChart: React.FC = () => {
  return (
    <div className="bg-finance-surface p-6 rounded-2xl flex-1 min-w-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-foreground">Ingresos vs Gastos</h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-finance-blue" />
            <span>Ingresos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-finance-orange" />
            <span>Gastos</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} barGap={2} barSize={14}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              background: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
          />
          <Bar dataKey="ingresos" fill="hsl(var(--finance-blue))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="gastos" fill="hsl(var(--finance-orange))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
