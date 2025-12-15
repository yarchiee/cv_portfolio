import { portfolioData } from '@/lib/data/portfolio';

export default function Footer() {
    const { personal, footer } = portfolioData;

    return (
        <footer className="bg-black text-white py-20 px-8 md:px-12">
            <div className="max-w-[1920px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div>
                    <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
                    <a href={`mailto:${personal.email}`} className="text-lg md:text-2xl font-bold hover:text-[var(--color-orange)] transition-colors">
                        {personal.email}
                    </a>
                </div>

                {/* <div className="flex gap-8">
                    {footer.social.map((link) => (
                        <a key={link.name} href={link.url} className="text-xs font-bold uppercase tracking-[0.15em] hover:text-[var(--color-orange)] transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div> */}
            </div>

            <div className="max-w-[1920px] mx-auto w-full mt-20 pt-8 border-t border-gray-800 flex justify-between text-[10px] text-gray-500">
                <p>&copy; {new Date().getFullYear()} {personal.name}</p>
                <p>Designed & Built by {personal.name}</p>
            </div>
        </footer>
    );
}
