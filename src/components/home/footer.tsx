import type { FC } from 'hono/jsx';

interface HomeFooterProps {
  note: string;
}

const HomeFooter: FC<HomeFooterProps> = ({ note }) => {
  return (
    <footer class='mt-20 border-t border-[var(--brand-border)] pt-8 text-center'>
      <p class='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-text-muted)]'>{note}</p>
    </footer>
  );
};

export default HomeFooter;
