export const inputClass =
  'border-stroke-3 bg-background-1 text-tagline-1 placeholder:text-secondary/50 focus:border-primary-500 text-secondary h-12 w-full rounded-full border px-5 font-normal focus:outline-none';

export const pillClass =
  'text-tagline-2 border-stroke-3 text-secondary/80 hover:border-primary-300 flex h-11 flex-1 cursor-pointer items-center justify-center rounded-full border bg-white font-medium transition-colors duration-200';

export const pillActive = 'border-primary-500 bg-primary-500 hover:border-primary-500 text-white';

export const formatPhone = (value: string) => {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : '';
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};
