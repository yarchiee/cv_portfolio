import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/lib/data/portfolio';

export default function Hero() {
    const { personal, hero } = portfolioData;

    return (
        <section className="min-h-screen flex flex-col pt-32 pb-0 bg-[#f2f2ed]">
            {/* Row 1: Header Section */}
            <div className="px-8 md:px-12 max-w-[1920px] mx-auto w-full mb-12">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                    {/* Left: Huge Title */}
                    <h1 className="text-[10vw] lg:text-[10vw] font-bold uppercase tracking-normal leading-[0.85]">
                        {personal.name.split(' ')[0]}
                        <br />
                        {personal.name.split(' ').slice(1).join(' ')}
                    </h1>

                    {/* Right: Status & Info */}
                    <div className="flex flex-col items-end space-y-8 mb-4 w-full lg:w-auto">
                        {/* Status Badge */}
                        <div className="bg-black text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em]">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            {hero.header.status}
                        </div>

                        {/* Title & Keywords */}
                        <div className="text-right">
                            <h2 className="text-xl font-bold text-gray-800 mb-1">{hero.identity.title.primary}</h2>
                            <p className="text-[10px] text-gray-600 uppercase tracking-widest max-w-md">
                                {hero.header.keywords}
                            </p>
                        </div>

                        {/* Pill Buttons */}
                        {hero.header.links.length > 0 && (
                            <div className="flex flex-wrap justify-end gap-3 mt-8">
                                {(hero.header.links as Array<{ text: string; url: string }>).map((link) => (
                                    <a
                                        key={link.text}
                                        href={link.url}
                                        className="px-6 py-2 border border-gray-300 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Horizontal Line */}
                <div className="w-full h-px bg-gray-300 mt-12"></div>
            </div>

            {/* Row 2: 3-Column Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full flex-1 min-h-[600px] px-8 py-8">

                {/* Col 1: Photo */}
                <div className="bg-[#727D73] relative overflow-hidden group">
                    {/* 照片 - 請將您的照片放在 public/images/ 資料夾，檔名改為 photo.jpg */}
                    <Image
                        src="/images/portrait.jpg"
                        alt="Portrait"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* 漸層遮罩 */}
                    <div className="absolute inset-0 flex items-end justify-center">
                        <div className="w-2/3 h-2/3 bg-gradient-to-t from-black/20 to-transparent rounded-t-full opacity-50"></div>
                    </div>
                    {/* Hover 文字 */}
                    <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="font-bold uppercase tracking-[0.15em]">Portrait</p>
                    </div>
                </div>

                {/* Col 2: Left Column - 設計背景 */}
                <div className="bg-white p-12 lg:p-16 flex flex-col justify-start space-y-8">
                    {/* English Name & Basic Info */}
                    <div className="space-y-2">
                        <p className="text-[10px] text-gray-600 font-mono">{personal.pronouns}</p>
                        <h3 className="text-3xl font-bold">{personal.name}</h3>
                        <div className="text-base font-medium text-gray-800">
                            <p></p>
                            <p>{(hero.identity.title as any).secondary || hero.identity.title.primary}</p>
                        </div>
                    </div>



                    {/* Design Approach */}
                    {hero.leftColumn.designApproach && (

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 pb-2 border-b border-[#1a1a1a]/20">
                                {hero.leftColumn.designApproach.label}:
                            </h4>
                            <ul className="space-y-1 text-sm font-medium pt-2">
                                {hero.leftColumn.designApproach.items.map((area) => (
                                    <li key={area}>{area}</li>
                                ))}
                            </ul>
                        </div>

                    )}

                    {/* Design Skills - Categories */}
                    {hero.leftColumn.designSkills && (
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 pb-2 border-b border-gray-200">
                                {hero.leftColumn.designSkills.label}:
                            </h4>
                            <div className="space-y-2 pt-2">
                                {hero.leftColumn.designSkills.categories.map((category) => (
                                    <div key={category.name}>
                                        <div className="font-bold text-xs text-gray-800 mb-1">{category.name}</div>
                                        <div className="text-xs text-gray-600">{category.items.join(', ')}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Design Competencies */}
                    {/* {hero.leftColumn.designCompetencies && (
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 pb-2 border-b border-gray-200">
                                {hero.leftColumn.designCompetencies.label}:
                            </h4>
                            <ul className="space-y-1 pt-2">
                                {hero.leftColumn.designCompetencies.items.map((item) => (
                                    <li key={item.en} className="text-sm font-medium text-gray-700">
                                        {item.en}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )} */}

                    {/* Language */}
                    {/* <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 pb-2 border-b border-gray-200">
                            {hero.leftColumn.language.label}:
                        </h4>
                        <p className="text-sm font-medium leading-relaxed pt-2 text-gray-800">
                            {hero.leftColumn.language.value}
                        </p>
                    </div> */}

                    {/* Nationality */}
                    {/* <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 pb-2 border-b border-gray-200">
                            {hero.leftColumn.nationality.label}:
                        </h4>
                        <p className="text-sm font-medium leading-relaxed pt-2 text-gray-800">
                            {hero.leftColumn.nationality.value}
                        </p>
                    </div> */}

                    {/* Hobby */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-2 pb-2 border-b border-gray-200">
                            {hero.leftColumn.hobby.label}:
                        </h4>
                        <p className="text-sm font-medium leading-relaxed pt-2 text-gray-800">
                            {hero.leftColumn.hobby.value}
                        </p>
                    </div>
                       {/* Soft Skills */}
                       <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-2 pb-2 border-b border-[#1a1a1a]/20">
                            {hero.rightColumn.softSkills.label}:
                        </h4>
                        <ul className="space-y-1 pt-2">
                            {hero.rightColumn.softSkills.items.map((item) => (
                                <li key={item.en} className="text-sm font-medium">
                                    {item.en}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Col 3: Right Column - 開發專業 */}
                <div id="hero" className="bg-[#AAB99A] p-12 lg:p-16 flex flex-col justify-start space-y-8 text-[#1a1a1a]">
                    {/* Chinese Name */}
                    <div className="space-y-4">
                        <h3 className="text-4xl font-bold">{hero.rightColumn.nameZh}</h3>
                    </div>

                    {/* Current Position */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-2 pb-2 border-b border-[#1a1a1a]/20">
                            {hero.rightColumn.currentPosition.label}:
                        </h4>
                        <p className="text-sm font-medium leading-relaxed pt-2">
                            {hero.rightColumn.currentPosition.value}
                        </p>
                    </div>

                    {/* Development Areas */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-2 pb-2 border-b border-[#1a1a1a]/20">
                            {hero.rightColumn.developmentAreas.label}:
                        </h4>
                        <ul className="space-y-1 text-sm font-medium pt-2">
                            {hero.rightColumn.developmentAreas.items.map((area) => (
                                <li key={area}>{area}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Development Skills - Categories */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-2 pb-2 border-b border-[#1a1a1a]/20">
                            {hero.rightColumn.developmentSkills.label}:
                        </h4>
                        <div className="space-y-2 pt-2">
                            {hero.rightColumn.developmentSkills.categories.map((category) => (
                                <div key={category.name} >
                                    <div className="font-bold text-xs mb-1">{category.name}</div>
                                    <div className="text-xs">{category.items.join(', ')}</div>
                                </div>
                            ))}
                        </div>
                    </div>



                 
                </div>

            </div>
        </section>
    );
}
