'use client';

import { useState } from 'react';
import { Briefcase, GraduationCap, Award, ChevronUp, ChevronDown } from 'lucide-react';
import { portfolioData } from '@/lib/data/portfolio';

export default function ExperienceSection({ children }: { children?: React.ReactNode }) {
    // Toggle functionality - currently disabled, all sections always expanded
    // Uncomment below to enable toggle feature
    // const [sections, setSections] = useState({
    //     experience: true,
    //     education: true,
    //     awards: true,
    // });

    // const toggleSection = (key: keyof typeof sections) => {
    //     setSections(prev => ({ ...prev, [key]: !prev[key] }));
    // };

    const { experience, education, awards } = portfolioData;

    // 提取獎項類型 tag（入圍、銅獎、佳作等）
    const extractAwardTags = (title: string): string[] => {
        const tags: string[] = [];
        if (title.includes('入圍')) tags.push('入圍');
        if (title.includes('銅獎')) tags.push('銅獎');
        if (title.includes('佳作')) tags.push('佳作');
        if (title.includes('銀獎')) tags.push('銀獎');
        if (title.includes('金獎')) tags.push('金獎');
        if (title.includes('第一名')) tags.push('第一名');
        if (title.includes('第二名')) tags.push('第二名');
        if (title.includes('第三名')) tags.push('第三名');
        if (title.includes('第四名')) tags.push('第四名');
        return tags;
    };

    // 從 title 中移除獎項類型文字
    const removeAwardTagsFromTitle = (title: string): string => {
        let cleanedTitle = title;
        const awardTypes = ['入圍', '銅獎', '佳作', '銀獎', '金獎', '第一名', '第二名', '第三名', '第四名', '入圍決選'];
        
        awardTypes.forEach(type => {
            // 移除「 - 入圍」或「 - 銅獎」等格式
            cleanedTitle = cleanedTitle.replace(new RegExp(`\\s*-\\s*${type}`, 'g'), '');
            // 移除「入圍決選」等完整詞組
            cleanedTitle = cleanedTitle.replace(new RegExp(type, 'g'), '');
        });
        
        // 清理多餘的「 - 」和空格
        cleanedTitle = cleanedTitle.replace(/\s*-\s*$/g, '').replace(/\s*-\s*-/g, '-').trim();
        
        return cleanedTitle;
    };

    return (
        <section id="experience" className="bg-[#333333] text-white py-12 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                {/* About Me Content */}
                {children && (
                    <div className="mb-12">
                        {children}
                    </div>
                )}

                {/* Toggle Buttons - Currently Disabled */}
                {/* Uncomment below to enable toggle buttons */}
                {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => toggleSection('experience')}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${sections.experience ? 'bg-white text-black' : 'bg-transparent border border-white text-white hover:bg-white/10'
                            }`}
                    >
                        <Briefcase size={14} />
                        Working Experience
                        {sections.experience ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <button
                        onClick={() => toggleSection('education')}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${sections.education ? 'bg-white text-black' : 'bg-transparent border border-white text-white hover:bg-white/10'
                            }`}
                    >
                        <GraduationCap size={14} />
                        Education
                        {sections.education ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <button
                        onClick={() => toggleSection('awards')}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${sections.awards ? 'bg-white text-black' : 'bg-transparent border border-white text-white hover:bg-white/10'
                            }`}
                    >
                        <Award size={14} />
                        Honors & Awards
                        {sections.awards ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                </div> */}

                {/* Content Container - Separated colored sections */}
                <div className="space-y-6">
                    {/* Working Experience - Teal accent */}
                    {/* {sections.experience && ( */}
                    <div className="bg-[#404040] rounded-lg p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-6 text-lg font-bold border-b border-gray-600 pb-4">
                            <Briefcase className="text-[#CBF3BB]" size={20} />
                            <h2 className="tracking-wider">Working Experience</h2>
                        </div>
                        <div className="space-y-6">
                            {experience.map((item) => (
                                <div key={item.id} className="grid md:grid-cols-12 gap-2 md:gap-6 border-b border-gray-700/50 pb-6 last:border-0 last:pb-0">
                                    <div className="md:col-span-3 text-[#CBF3BB] font-mono text-xs pt-1">
                                        {item.date}
                                    </div>
                                    <div className="md:col-span-9">
                                        <h3 className="text-base font-bold  mb-1">{item.title}</h3>
                                        <p className="text-gray-300 text-[12px] uppercase tracking-widest mb-2">{item.organization}</p>
                                        {item.description && (
                                            <p className="text-gray-200 text-sm  tracking-widest leading-relaxed">{item.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* )} */}

                    {/* Education - Orange/Red accent */}
                    {/* {sections.education && ( */}
                    <div className="bg-[#404040] rounded-lg p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-6 text-lg font-bold border-b border-gray-600 pb-4">
                            <GraduationCap className="text-[#fbbf24]" size={20} />
                            <h2 className="tracking-wider">Education</h2>
                        </div>
                        <div className="space-y-6">
                            {education.map((item) => (
                                <div key={item.id} className="grid md:grid-cols-12 gap-2 md:gap-6 border-b border-gray-700/50 pb-6 last:border-0 last:pb-0">
                                    <div className="md:col-span-3 text-[#fbbf24] font-mono text-xs pt-1">
                                        {item.date}
                                    </div>
                                    <div className="md:col-span-9">
                                        <h3 className="text-base font-bold mb-1">{item.title}</h3>
                                        <p className="text-gray-300 text-[12px] uppercase tracking-widest mb-2">{item.organization}</p>
                                        {item.details && (
                                               <p className="text-gray-200 text-sm tracking-wider leading-relaxed">{item.details}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* )} */}

                    {/* Awards - Pink accent */}
                    {/* {sections.awards && ( */}
                    <div className="bg-[#404040] rounded-lg p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-6 text-lg font-bold border-b border-gray-600 pb-4">
                            <Award className="text-[#F5CBCB]" size={20} />
                            <h2 className="tracking-wider">Honors & Awards & Activities</h2>
                        </div>
                        <div className="space-y-6">
                            {awards.map((item) => {
                                const awardTags = extractAwardTags(item.title);
                                const cleanedTitle = removeAwardTagsFromTitle(item.title);
                                return (
                                    <div key={item.id} className="grid md:grid-cols-12 gap-2 md:gap-6 border-b border-gray-700/50 pb-6 last:border-0 last:pb-0">
                                        <div className="md:col-span-3 text-[#F5CBCB] font-mono text-xs pt-1">
                                            {item.date}
                                        </div>
                                        <div className="md:col-span-9">
                                            <div className="flex items-start gap-2 mb-1">
                                                <h3 className="text-base font-bold tracking-wider flex-1">{cleanedTitle}</h3>
                                                {awardTags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1">
                                                        {awardTags.map((tag, i) => (
                                                            <span key={i} className="text-xs font-bold text-gray-300 uppercase tracking-[0.15em] border border-gray-500 px-2 py-0.5 rounded-sm">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-300 text-[12px] uppercase tracking-widest mb-2">{item.organization}</p>
                                            {(item as any).project && (
                                                 <p className="text-gray-200 text-sm tracking-wider  leading-relaxed">{(item as any).project}</p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* )} */}
                </div>
            </div>
        </section>
    );
}
