'use client';

import { portfolioData } from '@/lib/data/portfolio';
import Section from './Section';

export default function DesignPhilosophy() {
    const { designPhilosophy } = portfolioData;

    return (
        <Section className="py-24  bg-white" id="design-philosophy" title="Design Philosophy">
            <div className="px-8 md:px-0 max-w-[100%] mx-auto w-full">
                {/* Section Title & Statement */}
                <div className="mb-12  space-y-4">
                    {/* <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-orange)]">
                        Design Philosophy
                    </h2> */}
                    <div className="max-w-4xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            {designPhilosophy.title.zh}
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            {designPhilosophy.statement.zh}
                        </p>
                    </div>
                </div>

                {/* Grid Layout - Same as Research Areas */}
                <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {designPhilosophy.journeyStages.map((stage, index) => (
                        <div key={index} className="pt-8 md:pt-0 md:pl-8 first:pl-0">
                            <div className="space-y-4">
                                <span className="text-xs font-bold text-gray-400">0{index + 1}</span>
                                <h3 className="text-xl font-bold">{stage.question.zh}</h3>
                                <p className="text-xs font-bold tracking-[0.15em] text-gray-400 uppercase">{stage.period}</p>
                                <p className="text-sm text-gray-600 leading-relaxed tracking-wider">{stage.title.en}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
