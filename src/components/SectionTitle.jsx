import React from 'react';

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  titleColor= 'text-green-primary'
}) => {
  const alignmentClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  const containerClasses = [alignmentClass, className].filter(Boolean).join(' ');
  const titleClasses = [
    'text-3xl',
    'sm:text-4xl',
    'lg:text-5xl',
    'font-bold',
    'mb-6',
    'font-grotesk',
    titleColor,
    titleClassName
  ]
    .filter(Boolean)
    .join(' ');
  const subtitleClasses = [
    'text-base',
    'sm:text-lg',
    'text-black/70',
    align === 'center' ? 'max-w-3xl mx-auto' : '',
    subtitleClassName
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {title && <h2 className={titleClasses}>{title}</h2>}
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
