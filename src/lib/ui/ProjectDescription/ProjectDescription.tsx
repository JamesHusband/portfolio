type ProjectDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export function ProjectDescription({
  children,
  className = "",
}: ProjectDescriptionProps) {
  return (
    <div className={`bg-[#112240] p-6 rounded-md ${className}`}>
      <p className="text-slate-300">{children}</p>
    </div>
  );
}
