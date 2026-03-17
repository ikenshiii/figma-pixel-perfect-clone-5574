import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Consultas', value: 45, color: 'hsl(var(--finance-blue))' },
  { name: 'Tratamientos', value: 25, color: 'hsl(var(--finance-purple))' },
  { name: 'Cirugías', value: 18, color: 'hsl(var(--finance-green))' },
  { name: 'Otros', value: 12, color: 'hsl(var(--finance-orange))' },
];

export const DistributionChart: React.FC = () => {
  return (
    <div className="bg-finance-surface p-6 rounded-2xl min-w-[280px] w-[320px]">
      <h3 className="text-sm font-semibold text-foreground mb-4">Distribución de Ingresos</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={3}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            formatter={(value: number) => [`${value}%`, undefined]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2 mt-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-medium text-foreground">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
