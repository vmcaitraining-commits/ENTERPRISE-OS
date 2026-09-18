import React from 'react';

export interface AdminCardProps {
  id?: string;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
}

export const AdminCard: React.FC<AdminCardProps> = ({
  id,
  className = '',
  padding = 'md',
  children,
  onClick,
  hoverable = false,
}) => {
  const paddingMap = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  const interactiveClasses = hoverable || onClick
    ? 'cursor-pointer hover:border-[#155EEF]/40 hover:shadow-xs transition-all duration-150'
    : '';

  return (
    <div
      id={id}
      onClick={onClick}
      className={`bg-white rounded-xl border border-[#E5EAF1] shadow-2xs ${paddingMap[padding]} ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
};
