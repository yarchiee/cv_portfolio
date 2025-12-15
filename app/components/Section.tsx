interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
    return (
        <section id={id} className={`py-12 md:pt-16 px-6 md:px-12 max-w-[90%] mx-auto ${className}`}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-1/5">
                    <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-orange)] sticky top-32">
                        {title}
                    </h2>
                </div>
                <div className="md:w-4/5">
                    {children}
                </div>
            </div>
        </section>
    );
}
