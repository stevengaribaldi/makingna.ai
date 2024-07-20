import React from 'react';

type SectionProps = {
  label: string;
  message: string;
};

const Section = ({ label, message }: SectionProps) => {
  return (
    <div className="text-slate-900">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm font-extralight ">{message}</p>
    </div>
  );
};

export default Section;
