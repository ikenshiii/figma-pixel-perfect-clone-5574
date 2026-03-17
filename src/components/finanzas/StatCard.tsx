import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  iconBgClass: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon,
  iconBgClass,
}) => {
  const changeColor =
    changeType === 'positive'
      ? 'text-finance-green'
      : changeType === 'negative'
        ? 'text-finance-red'
        : 'text-muted-foreground';

  return (
    <div className="flex flex-col gap-3 bg-finance-surface p-5 rounded-2xl flex-1 min-w-[200px]">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground font-normal">{title}</span>
        <div className={`flex items-center justify-center w-8 h-8 rounded-xl ${iconBgClass}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-semibold text-foreground">{value}</span>
        <span className={`text-xs font-medium ${changeColor} mb-1`}>{change}</span>
      </div>
    </div>
  );
};
