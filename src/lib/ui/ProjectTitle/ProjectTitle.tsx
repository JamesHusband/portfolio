type ProjectTitleProps = {
  title: string;
  featured?: boolean;
  className?: string;
};

export function ProjectTitle({
  title,
  featured = false,
  className = "",
}: ProjectTitleProps) {
  return (
    <div className={className}>
      {featured && (
        <p className="text-emerald-400 text-sm mb-2">Featured Project</p>
      )}
      <h3 className="text-2xl text-slate-light font-semibold">{title}</h3>
    </div>
  );
}
