import React from 'react';

const pending = [
  { patient: 'Bruce Wayne', amount: 180000, daysOverdue: 0, due: '20 Feb 2025' },
  { patient: 'Michael Brown', amount: 42000, daysOverdue: 0, due: '18 Feb 2025' },
  { patient: 'Melody Macy', amount: 320000, daysOverdue: 0, due: '22 Feb 2025' },
  { patient: 'Emma Smith', amount: 35000, daysOverdue: 3, due: '12 Feb 2025' },
];

export const PendingPayments: React.FC = () => {
  return (
    <div className="bg-finance-surface p-5 rounded-2xl">
      <h3 className="text-sm font-semibold text-foreground mb-4">Pagos Pendientes</h3>
      <div className="flex flex-col gap-3">
        {pending.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-foreground">{item.patient}</span>
              <span className="text-xs text-muted-foreground">
                {item.daysOverdue > 0
                  ? `Vencido hace ${item.daysOverdue} días`
                  : `Vence: ${item.due}`}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-medium text-foreground">
                ${item.amount.toLocaleString()}
              </span>
              <button className="px-2 py-1 text-xs rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity">
                Cobrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
