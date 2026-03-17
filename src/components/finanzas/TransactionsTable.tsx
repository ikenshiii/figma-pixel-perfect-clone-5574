import React, { useState } from 'react';

interface Transaction {
  id: string;
  patient: string;
  concept: string;
  date: string;
  amount: number;
  status: 'pagado' | 'pendiente' | 'vencido';
  method: string;
}

const transactions: Transaction[] = [
  { id: 'TRX-001', patient: 'Andi Lane', concept: 'Consulta general', date: '15 Feb 2025', amount: 45000, status: 'pagado', method: 'Transferencia' },
  { id: 'TRX-002', patient: 'Bruce Wayne', concept: 'Tratamiento dental', date: '15 Feb 2025', amount: 180000, status: 'pendiente', method: 'Tarjeta' },
  { id: 'TRX-003', patient: 'Drew Cano', concept: 'Cirugía menor', date: '14 Feb 2025', amount: 520000, status: 'pagado', method: 'Transferencia' },
  { id: 'TRX-004', patient: 'Emma Smith', concept: 'Control mensual', date: '14 Feb 2025', amount: 35000, status: 'vencido', method: 'Efectivo' },
  { id: 'TRX-005', patient: 'Kate Morrison', concept: 'Examen de sangre', date: '13 Feb 2025', amount: 28000, status: 'pagado', method: 'Tarjeta' },
  { id: 'TRX-006', patient: 'Koray Okumus', concept: 'Consulta especialista', date: '13 Feb 2025', amount: 65000, status: 'pagado', method: 'Transferencia' },
  { id: 'TRX-007', patient: 'Michael Brown', concept: 'Radiografía', date: '12 Feb 2025', amount: 42000, status: 'pendiente', method: 'Tarjeta' },
  { id: 'TRX-008', patient: 'Natali Craig', concept: 'Terapia física', date: '12 Feb 2025', amount: 55000, status: 'pagado', method: 'Efectivo' },
  { id: 'TRX-009', patient: 'Orlando Diggs', concept: 'Consulta general', date: '11 Feb 2025', amount: 45000, status: 'pagado', method: 'Transferencia' },
  { id: 'TRX-010', patient: 'Melody Macy', concept: 'Tratamiento láser', date: '11 Feb 2025', amount: 320000, status: 'pendiente', method: 'Tarjeta' },
];

const statusStyles: Record<Transaction['status'], string> = {
  pagado: 'bg-finance-green-light text-finance-green',
  pendiente: 'bg-finance-orange-light text-finance-orange',
  vencido: 'bg-finance-red-light text-finance-red',
};

const statusLabels: Record<Transaction['status'], string> = {
  pagado: 'Pagado',
  pendiente: 'Pendiente',
  vencido: 'Vencido',
};

export const TransactionsTable: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | Transaction['status']>('todos');

  const filtered = filter === 'todos' ? transactions : transactions.filter((t) => t.status === filter);

  return (
    <div className="bg-finance-surface p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <h3 className="text-sm font-semibold text-foreground">Transacciones Recientes</h3>
        <div className="flex items-center gap-1 bg-background rounded-2xl p-0.5 border border-border">
          {(['todos', 'pagado', 'pendiente', 'vencido'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-2xl text-xs font-medium transition-colors ${
                filter === f
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {f === 'todos' ? 'Todos' : statusLabels[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground pb-3 pr-4">ID</th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3 pr-4">Paciente</th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3 pr-4">Concepto</th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3 pr-4">Fecha</th>
              <th className="text-right text-xs font-medium text-muted-foreground pb-3 pr-4">Monto</th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3 pr-4">Método</th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tx) => (
              <tr key={tx.id} className="border-b border-border/50 last:border-0 hover:bg-background/50 transition-colors">
                <td className="py-3 pr-4 text-muted-foreground font-mono text-xs">{tx.id}</td>
                <td className="py-3 pr-4 font-medium text-foreground">{tx.patient}</td>
                <td className="py-3 pr-4 text-muted-foreground">{tx.concept}</td>
                <td className="py-3 pr-4 text-muted-foreground text-xs">{tx.date}</td>
                <td className="py-3 pr-4 text-right font-medium text-foreground font-mono">
                  ${tx.amount.toLocaleString()}
                </td>
                <td className="py-3 pr-4 text-muted-foreground text-xs">{tx.method}</td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusStyles[tx.status]}`}>
                    {statusLabels[tx.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
