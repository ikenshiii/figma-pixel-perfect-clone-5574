import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { StatCard } from '@/components/finanzas/StatCard';
import { RevenueChart } from '@/components/finanzas/RevenueChart';
import { DistributionChart } from '@/components/finanzas/DistributionChart';
import { TransactionsTable } from '@/components/finanzas/TransactionsTable';
import { QuickActions } from '@/components/finanzas/QuickActions';
import { PendingPayments } from '@/components/finanzas/PendingPayments';

const statCards = [
  {
    title: 'Ingresos del Mes',
    value: '$7,820,000',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v14M1 8l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    iconBgClass: 'bg-finance-green-light text-finance-green',
  },
  {
    title: 'Gastos del Mes',
    value: '$4,100,000',
    change: '+3.2%',
    changeType: 'negative' as const,
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 15V1M1 8l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    iconBgClass: 'bg-finance-red-light text-finance-red',
  },
  {
    title: 'Beneficio Neto',
    value: '$3,720,000',
    change: '+24.1%',
    changeType: 'positive' as const,
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 5v6M6 7l2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    iconBgClass: 'bg-finance-blue-light text-finance-blue',
  },
  {
    title: 'Pagos Pendientes',
    value: '$577,000',
    change: '4 pacientes',
    changeType: 'neutral' as const,
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2 7h12" stroke="currentColor" strokeWidth="1.5"/></svg>,
    iconBgClass: 'bg-finance-orange-light text-finance-orange',
  },
];

const Finanzas = () => {
  return (
    <div className="flex items-stretch overflow-hidden flex-wrap bg-background rounded-3xl">
      <Sidebar />

      <main className="grow shrink-0 basis-0 w-fit max-md:max-w-full overflow-y-auto max-h-screen">
        <Header />

        <div className="p-7 flex flex-col gap-6 max-md:px-4">
          {/* Stats */}
          <div className="flex gap-4 flex-wrap">
            {statCards.map((card) => (
              <StatCard key={card.title} {...card} />
            ))}
          </div>

          {/* Charts row */}
          <div className="flex gap-4 flex-wrap">
            <RevenueChart />
            <DistributionChart />
          </div>

          {/* Bottom row */}
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[500px]">
              <TransactionsTable />
            </div>
            <div className="flex flex-col gap-4 w-[280px] min-w-[260px]">
              <QuickActions />
              <PendingPayments />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Finanzas;
