import React from 'react';

const actions = [
  { label: 'Nueva factura', icon: '📄' },
  { label: 'Registrar pago', icon: '💳' },
  { label: 'Generar reporte', icon: '📊' },
  { label: 'Enviar cobro', icon: '✉️' },
];

export const QuickActions: React.FC = () => {
  return (
    <div className="bg-finance-surface p-5 rounded-2xl">
      <h3 className="text-sm font-semibold text-foreground mb-4">Acciones Rápidas</h3>
      <div className="flex flex-col gap-2">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-foreground hover:bg-background transition-colors text-left"
          >
            <span className="text-base">{action.icon}</span>
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
