'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/lib/data/portfolio';

interface Project {
    id: number | string;
    title: string | {
        zh: string;
        en: string;
        subtitle: string;
    };
    titleObj?: {
        zh: string;
        en: string;
        subtitle: string;
    };
    subtitle?: string;
    category?: string;
    categories?: string[];
    type?: string;
    year?: string;
    duration?: string;
    location?: string;
    role?: string;
    designers?: string[];
    team?: string[];
    instructor?: string;
    awards?: string[];
    tags?: string[];
    description?: string | {
        zh: string;
        en: string;
    };
    oneLiner?: {
        zh: string;
        en: string;
    };
    concept?: any;
    designStrategy?: any;
    experienceDesign?: any;
    designValue?: {
        forISS?: {
            zh: string;
            en: string;
        };
        skills?: string[];
    };
    researchProcess?: any;
    designFocus?: any;
    expectedOutcomes?: any;
    tech?: string[];
    skills?: string[];
    image?: string;
    imagesObj?: any;
    link?: string;
    // 新增欄位
    features?: {
        zh: string[];
        en: string[];
    };
    technicalHighlights?: {
        zh: string[];
        en: string[];
    };
    architecture?: {
        zh: string[];
        en: string[];
    };
    pageDetails?: {
        zh: {
            login?: string;
            labels?: string;
            issueList?: string;
            newIssue?: string;
            issuePage?: string;
            [key: string]: string | undefined;
        };
        en: {
            login?: string;
            labels?: string;
            issueList?: string;
            newIssue?: string;
            issuePage?: string;
            [key: string]: string | undefined;
        };
    };
    futureFeatures?: {
        zh: string[];
        en: string[];
    };
    github?: string;
    liveDemo?: string;
    projectStructure?: {
        description?: {
            zh: string;
            en: string;
        };
        folders?: {
            [key: string]: string;
        };
    };
}

interface ProjectDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

export default function ProjectDrawer({ isOpen, onClose, project }: ProjectDrawerProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    // Helper to render bilingual text
    const renderBilingual = (obj: any) => {
        if (typeof obj === 'string') return <p>{obj}</p>;
        if (obj?.zh || obj?.en) {
            return (
                <div className="space-y-1">
                    {obj.zh && <p className="text-gray-800 leading-relaxed tracking-wider">{obj.zh}</p>}
                    {obj.en && <p className="text-gray-600 text-sm leading-relaxed">{obj.en}</p>}
                </div>
            );
        }
        return null;
    };

    // Helper to render image (supports both local and external URLs, including GIFs)
    const renderImage = (src: string, alt: string, className?: string, preserveAspectRatio: boolean = false) => {
        const isExternal = src.startsWith('http://') || src.startsWith('https://');
        const isGif = src.toLowerCase().endsWith('.gif');
        const isVideo = src.toLowerCase().endsWith('.mp4');
        
        // Video files use video tag
        if (isVideo) {
            return (
                <video
                    src={src}
                    controls
                    className={className || "w-full h-auto"}
                    style={{ width: '100%', height: 'auto' }}
                />
            );
        }
        
        // GIF files, external URLs, or when preserving aspect ratio use regular img tag
        if (isGif || isExternal || preserveAspectRatio) {
            return (
                <img
                    src={src}
                    alt={alt}
                    className={className || (preserveAspectRatio ? "w-full h-auto" : "w-full h-full object-cover")}
                    style={preserveAspectRatio ? { width: '100%', height: 'auto' } : { width: '100%', height: '100%' }}
                />
            );
        }
        // Local images use Next.js Image component for optimization (only when not preserving aspect ratio)
        return (
            <Image
                src={src}
                alt={alt}
                fill
                className={className || "object-cover"}
            />
        );
    };

    // Special layout for GitHub Mockup - matches README format
    const renderGitHubMockupLayout = (project: Project) => {
        return (
            <div className="space-y-8">
                {/* Title */}
                <div className="text-center space-y-4">
                    {/* 頂部圖片（20%寬度，居中，保持原始比例） */}
                    {project.imagesObj?.hero && (
                        <div className="flex justify-center mb-4">
                            <div className="w-[20%] relative overflow-hidden rounded-lg shadow-md">
                                {renderImage(project.imagesObj.hero, "GitHub Mockup", undefined, true)}
                            </div>
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold">GitHub Mockup Website</h1>
                    <p className="text-lg">
                        ☀️ <strong>Mock GitHub issue page from Front-End design to product</strong>
                    </p>
                </div>

                {/* Hero Images - Support GIF or regular images */}
                {(project.imagesObj?.hero || project.imagesObj?.gif || (project.imagesObj as any)?.heroGif) && (
                    <div className="flex justify-center gap-4">
                        {(project.imagesObj as any)?.heroGif ? (
                            <div className="w-full relative aspect-video overflow-hidden rounded-lg shadow-md">
                                {renderImage((project.imagesObj as any).heroGif, "GitHub Mockup Demo")}
                            </div>
                        ) : project.imagesObj.issueList && project.imagesObj.issuePage ? (
                            <>
                                <div className="w-[50.5%] relative aspect-video overflow-hidden rounded-lg shadow-md">
                                    {renderImage(project.imagesObj.issueList, "Issue List")}
                                </div>
                                <div className="w-[48.5%] relative aspect-video overflow-hidden rounded-lg shadow-md">
                                    {renderImage(project.imagesObj.issuePage, "Issue Page")}
                                </div>
                            </>
                        ) : null}
                    </div>
                )}

                {/* About GitHub Mockup */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">About GitHub Mockup</h2>
                    <ul className="space-y-2 list-none">
                        <li>☑️ User can <strong>login</strong> and <strong>choose a repository</strong></li>
                        <li>☑️ User can <strong>create / delete / edit</strong> comments, issues, and labels</li>
                        <li>☑️ User can <strong>search / filter</strong> issues, labels and assignees</li>
                    </ul>
                </div>

                {/* Development Details */}
                <div className="space-y-4">
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Developed with <strong>TypeScript</strong>, <strong>React</strong>, <strong>React Router v6</strong>, <strong>Tailwind</strong> and <strong>Styled Components</strong> for <strong>RWD layout</strong>, and <strong>CSS animation</strong>.</li>
                        <li>Used <strong>Supabase</strong> to resolve <strong>OAuth login</strong></li>
                        <li>Used <strong>Context</strong> and <strong>useReducer</strong> to handle state management ( User registration and login state management )</li>
                        <li>Used <strong>Firebase</strong> to <strong>deploy website</strong> and hosted App on Firebase server</li>
                        <li>Connected to GitHub API to <strong>GET/PATCH/DELETE/POST</strong> user data by <strong>Octokit</strong> and researched official documents</li>
                        <li>Built <strong>reusable code</strong> and <strong>UI components</strong> for future use and displayed on <a href="https://github-storybook.web.app/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-orange)] hover:underline"><strong>Storybook</strong></a></li>
                        <li>Supported <strong>Markdown</strong> in textarea by using <strong>Marked</strong> and <strong>Textarea-Markdown-Editor</strong></li>
                        <li>Supported <strong>pagination</strong> when issues are created over than 10 records</li>
                        <li>Supported <strong>Responsive Web Design</strong> to adjust for different screen sizes and viewports automatically</li>
                    </ul>
                </div>

                {/* Project Setting */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Project Setting 📝</h3>
                    <ul className="space-y-2 list-disc list-inside">
                        <li><strong>API files</strong> store in <strong>service document</strong></li>
                        <li><strong>Utils files</strong> store <strong>reusable function</strong> like <strong>calculate time</strong> and <strong>calculate random color</strong></li>
                        <li><strong>Context files</strong> store <strong>user registration data</strong> and <strong>login state management</strong></li>
                        <li><strong>Components files</strong> store <strong>reusable code</strong> and <strong>UI components</strong> like <strong>header</strong>, <strong>footer</strong></li>
                    </ul>
                    {(project.imagesObj as any)?.projectSetting && (
                        <div className="w-[83%] mx-auto relative aspect-video overflow-hidden rounded-lg shadow-md mt-4">
                            {renderImage((project.imagesObj as any).projectSetting, "Project Structure")}
                        </div>
                    )}
                </div>

                {/* Router Setting */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Router Setting 📝</h3>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Used <strong>React Router v6</strong> that provides a declarative, <strong>component-based</strong> approach to routing and handles the common tasks of dealing with <strong>URL params</strong>, <strong>redirects</strong>, and <strong>loading data</strong> and provides one of the most intuitive APIs available and enables <strong>lazy loading</strong> and <strong>SEO-friendly</strong> <strong>server-side rendering</strong></li>
                        <li>Using <strong>nested routes</strong> and <strong>Outlet</strong> allows us to have <strong>a route that contains other child routes</strong></li>
                    </ul>
                    {(project.imagesObj as any)?.routerSetting && (
                        <div className="w-[83%] mx-auto relative aspect-video overflow-hidden rounded-lg shadow-md mt-4">
                            {renderImage((project.imagesObj as any).routerSetting, "Router Setting")}
                        </div>
                    )}
                </div>

                {/* Component Setting */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Component Setting 📝</h3>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Built <strong>reusable code</strong> and <strong>UI components</strong> for future use and displayed on <a href="https://github-storybook.web.app/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-orange)] hover:underline"><strong>Storybook</strong></a></li>
                        <li>Components like <strong>header</strong>, <strong>footer</strong>, <strong>dropdown list</strong>, <strong>button</strong>, and <strong>input search</strong></li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {(project.imagesObj as any)?.componentSetting1 && (
                            <div className="w-full relative aspect-video overflow-hidden rounded-lg shadow-md">
                                {renderImage((project.imagesObj as any).componentSetting1, "Component Setting 1")}
                            </div>
                        )}
                        {(project.imagesObj as any)?.componentSetting2 && (
                            <div className="w-full relative aspect-video overflow-hidden rounded-lg shadow-md">
                                {renderImage((project.imagesObj as any).componentSetting2, "Component Setting 2")}
                            </div>
                        )}
                    </div>
                </div>

                {/* Develop Tools */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Develop Tools 🔧</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech && project.tech.map((tool, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Demo Sections */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold">Demo 🌟</h3>

                    {/* Login Page */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Login Page ☁️</h4>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>After login, user can <strong>choose a repository</strong> and <strong>show issues</strong></li>
                            <li><strong>Selected repository</strong> and <strong>user name</strong> will show <strong>on http url</strong></li>
                        </ul>
                        {(project.imagesObj as any)?.loginGif && (
                            <div className="w-full relative aspect-video overflow-hidden rounded-lg shadow-md mt-4">
                                {renderImage((project.imagesObj as any).loginGif, "Login Page Demo")}
                            </div>
                        )}
                    </div>

                    {/* Label Page */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Label Page ☁️</h4>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>User can <strong>create / edit / delete</strong> a label</li>
                            <li>User can choose <strong>random color</strong> or <strong>select color from colorboard</strong></li>
                        </ul>
                        {(project.imagesObj as any)?.labelGif && (
                            <div className="w-full relative aspect-video overflow-hidden rounded-lg shadow-md mt-4">
                                {renderImage((project.imagesObj as any).labelGif, "Label Page Demo")}
                            </div>
                        )}
                    </div>

                    {/* IssueList Page */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">IssueList Page ☁️</h4>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>User can <strong>filter</strong> and <strong>search</strong> issues</li>
                            <li>User can click dropdown list to <strong>mutiple search</strong></li>
                            <li>User can <strong>clear all search params</strong></li>
                            <li>All dropdown list <strong>support keywords search</strong></li>
                            <li>If there is 0 records to display that will show <strong>no result page</strong></li>
                            <li>Supported <strong>pagination</strong> when issues are created over than 10 records</li>
                        </ul>
                        {(project.imagesObj as any)?.issueListGif && (
                            <div className="w-full relative aspect-video overflow-hidden rounded-lg shadow-md mt-4">
                                {renderImage((project.imagesObj as any).issueListGif, "IssueList Page Demo")}
                            </div>
                        )}
                    </div>

                    {/* NewIssue Page */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">NewIssue Page ☁️</h4>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>User can <strong>create</strong> a new issue</li>
                            <li>User can <strong>assign collaborator</strong> or <strong>assign yourself</strong></li>
                            <li>User can <strong>add</strong> or <strong>delete</strong> a label from sidebar</li>
                            <li>Supported <strong>Markdown</strong> in textarea with <strong>Marked</strong> and <strong>Texarea-Markdown-Editor</strong></li>
                        </ul>
                        {(project.imagesObj as any)?.newIssueGif && (
                            <div className="w-full relative aspect-video overflow-hidden rounded-lg shadow-md mt-4">
                                {renderImage((project.imagesObj as any).newIssueGif, "NewIssue Page Demo")}
                            </div>
                        )}
                    </div>

                    {/* IssuePage */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">IssuePage ☁️</h4>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>User can <strong>create / edit / delete</strong> a comment</li>
                            <li>The comment box will <strong>show defferent color</strong> according to owner or collaborator</li>
                        </ul>
                        {(project.imagesObj as any)?.issuePageGif && (
                            <div className="w-full relative aspect-video overflow-hidden rounded-lg shadow-md mt-4">
                                {renderImage((project.imagesObj as any).issuePageGif, "IssuePage Demo")}
                            </div>
                        )}
                    </div>

                    {/* RWD Layout */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">RWD Layout ☁️</h4>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Supported <strong>Responsive Web Design</strong> to adjust for different screen sizes and viewports automatically</li>
                        </ul>
                        {((project.imagesObj as any)?.rwdGif1 || (project.imagesObj as any)?.rwdGif2 || (project.imagesObj as any)?.rwdGif3) && (
                            <div className="flex justify-center gap-4 mt-4">
                                {(project.imagesObj as any)?.rwdGif1 && (
                                    <div className="w-[25%] relative overflow-hidden rounded-lg shadow-md">
                                        {renderImage((project.imagesObj as any).rwdGif1, "RWD Layout 1", undefined, true)}
                                    </div>
                                )}
                                {(project.imagesObj as any)?.rwdGif2 && (
                                    <div className="w-[25%] relative overflow-hidden rounded-lg shadow-md">
                                        {renderImage((project.imagesObj as any).rwdGif2, "RWD Layout 2", undefined, true)}
                                    </div>
                                )}
                                {(project.imagesObj as any)?.rwdGif3 && (
                                    <div className="w-[25%] relative overflow-hidden rounded-lg shadow-md">
                                        {renderImage((project.imagesObj as any).rwdGif3, "RWD Layout 3", undefined, true)}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Future Feature */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Future Feature 🔜</h3>
                    <ul className="space-y-2 list-disc list-inside">
                        {project.futureFeatures && project.futureFeatures.en && project.futureFeatures.en.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Links */}
                {(project.github || project.liveDemo) && (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Links</h3>
                        <div className="flex flex-wrap gap-4">
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm font-bold text-[var(--color-orange)] hover:underline"
                                >
                                    GitHub →
                                </a>
                            )}
                            {project.liveDemo && (
                                <a 
                                    href={project.liveDemo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm font-bold text-[var(--color-orange)] hover:underline"
                                >
                                    Live Demo →
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // Special layout for TR Plus (HOLA APP) - matches README format
    const renderTRPlusLayout = (project: Project) => {
        return (
            <div className="space-y-8">
                {/* Title */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">HOME APP</h1>
                </div>

                {/* Feature */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-wider">Feature</h2>
                    <div className="space-y-2">
                        <div className="flex items-start">
                            <span className="text-sm font-bold text-gray-700 mr-3 min-w-[100px] tracking-wider">Member Management</span>
                            <span className="text-gray-600 text-sm tracking-wider">Login/Registration, Forgot Password, Change Password, Phone Verification, Marketing Subscription Settings, Order Tracking, Points, Coupons, Membership Card, Edit Member Information.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-sm font-bold text-gray-700 mr-3 min-w-[100px] tracking-wider">Shopping</span>
                            <span className="text-gray-600 text-sm tracking-wider">Add to Cart, Filter and Sort, Display Product Prices and Specifications, Add to Wishlist, Product Recommendations, Search.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-sm font-bold text-gray-700 mr-3 min-w-[100px] tracking-wider">Activities</span>
                            <span className="text-gray-600 text-sm tracking-wider">Store Locator, Course Registration, Scan to Redeem Coupon, Push Notification.</span>
                        </div>
                    </div>
                </div>

                {/* Project Structure */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-wider">Project Structure</h2>
                    <p className="font-bold tracking-wider">Feature first ( layers inside features)</p>
                    <ul className="space-y-2 list-disc list-inside">
                        <li className="tracking-wider"><strong>assets</strong>: This directory is used to store static resources such as pictures, fonts, and icons.</li>
                        <li className="tracking-wider"><strong>service</strong>: This directory handles backend communication, API calls, and data processing. Techniques like dependency injection and API client encapsulation are applied here to improve code organization and flexibility.</li>
                        <li className="tracking-wider"><strong>widget</strong>: Custom Flutter widgets responsible for rendering UI elements are stored here. Complex UI components are broken down into reusable widgets, ensuring clean and organized code.</li>
                        <li className="tracking-wider"><strong>screen</strong>: This directory contains various pages or views of the application. The view layer is separated from business logic, following design patterns, to improve maintainability and scalability of the codebase.</li>
                        <li className="tracking-wider"><strong>model</strong>: This directory holds the data models that define the structure of data used in the application. It plays a key role in managing data consistency and interaction between the backend and frontend.</li>
                    </ul>
                    {(project.imagesObj as any)?.projectStructure && (
                        <div className="w-full relative overflow-hidden rounded-lg shadow-md my-8">
                            {renderImage((project.imagesObj as any).projectStructure, "Project Structure", undefined, true)}
                        </div>
                    )}
                </div>

                {/* Components Setting */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-wider">Components Setting</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li className="tracking-wider">Built <strong>reusable code</strong> and <strong>UI components</strong> for future use.</li>
                        <li className="tracking-wider">Components like <strong>SearchBar</strong>, <strong>Shopping Cards</strong>, <strong>Bottomsheet</strong>, and <strong>Button</strong>.</li>
                    </ul>
                    <div className="space-y-4 my-8">
                        {(project.imagesObj as any)?.componentSetting1 && (
                            <div className="w-full relative overflow-hidden rounded-lg shadow-md">
                                {renderImage((project.imagesObj as any).componentSetting1, "Component Setting 1", undefined, true)}
                            </div>
                        )}
                        {(project.imagesObj as any)?.componentSetting2 && (
                            <div className="w-full relative overflow-hidden rounded-lg shadow-md">
                                {renderImage((project.imagesObj as any).componentSetting2, "Component Setting 2", undefined, true)}
                            </div>
                        )}
                    </div>
                </div>

                {/* Develop Tools */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-wider">Develop Tools</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li className="tracking-wider"><strong>IDE</strong>: Visual Studio Code, Android Studio, Xcode</li>
                        <li className="tracking-wider"><strong>Version Control</strong>: Git, GitHub</li>
                        <li className="tracking-wider"><strong>API Tools</strong>: Postman (for API testing), Dio (for API requests and data management in Flutter)</li>
                        <li className="tracking-wider"><strong>Testing</strong>: Flutter DevTools, Maestro (for E2E Testing)</li>
                        <li className="tracking-wider"><strong>Design Collaboration</strong>: Figma</li>
                    </ul>
                </div>

                {/* Demo */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-wider">Demo</h2>

                    {/* Demo 1 */}
                    <div className="space-y-8">
                        <p className="font-bold tracking-wider">1. <strong>Scrolling Product List</strong> → <strong>Switch Category</strong> → <strong>Filter and Sort Products</strong></p>
                        {((project.imagesObj as any)?.demo1 || (project.imagesObj as any)?.demo102) && (
                            <div className="flex justify-start gap-4 mt-4">
                                {(project.imagesObj as any)?.demo1 && (
                                    <div className="w-1/2 relative overflow-hidden rounded-lg shadow-md">
                                        {renderImage((project.imagesObj as any).demo1, "Demo 1", undefined, true)}
                                    </div>
                                )}
                                {(project.imagesObj as any)?.demo102 && (
                                    <div className="w-1/2 relative overflow-hidden rounded-lg shadow-md">
                                        {renderImage((project.imagesObj as any).demo102, "Demo 1-2", undefined, true)}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Demo 2 */}
                    <div className="space-y-8">
                        <p className="font-bold tracking-wider">2. <strong>Switch Main Image</strong> → <strong>Slideshow Zoom In/Out Effect</strong> → <strong>Switch Product Specifications</strong></p>
                        {(project.imagesObj as any)?.demo2 && (
                            <div className="w-1/2 relative overflow-hidden rounded-lg shadow-md mt-4">
                                {renderImage((project.imagesObj as any).demo2, "Demo 2", undefined, true)}
                            </div>
                        )}
                    </div>

                    {/* Demo 3 */}
                    <div className="space-y-8">
                        <p className="font-bold tracking-wider">3. <strong>Transfer Points</strong> → <strong>Real-time Information Display</strong></p>
                        {(project.imagesObj as any)?.demo3 && (
                            <div className="w-1/2 relative overflow-hidden rounded-lg shadow-md mt-4">
                                {renderImage((project.imagesObj as any).demo3, "Demo 3", undefined, true)}
                            </div>
                        )}
                    </div>

                    {/* Demo 4 */}
                    <div className="space-y-8">
                        <p className="font-bold tracking-wider">4. <strong>Message Inbox</strong> → <strong>Click for Details</strong> → <strong>Mark All as Read Feature</strong></p>
                        {(project.imagesObj as any)?.demo4 && (
                            <div className="w-1/2 relative overflow-hidden rounded-lg shadow-md mt-4">
                                {renderImage((project.imagesObj as any).demo4, "Demo 4", undefined, true)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full bg-[#F5F5F0] shadow-2xl z-50 transform transition-transform duration-500 ease-out overflow-y-auto w-full md:w-2/3 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 p-2 hover:bg-gray-200 rounded-full transition-colors z-10"
                >
                    <X size={24} />
                </button>

                {project && (
                    <div className="p-8 md:p-16 min-h-full">
                        {/* Special layout for github-mockup */}
                        {project.id === 'github-mockup' ? (
                            <div className="max-w-4xl mx-auto space-y-8">
                                {/* GitHub Mockup Special Layout */}
                                {renderGitHubMockupLayout(project)}
                            </div>
                        ) : project.id === 'tr-plus' ? (
                            <div className="max-w-4xl mx-auto space-y-8">
                                {/* TR Plus Special Layout */}
                                {renderTRPlusLayout(project)}
                            </div>
                        ) : (
                        <div className="max-w-3xl mx-auto space-y-12">
                            {/* Header */}
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    {project.year && (
                                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-orange)]">
                                            {project.year}
                                        </span>
                                    )}
                                    {project.categories && project.categories.length > 0 ? (
                                        project.categories.map((cat, i) => (
                                            <span key={i} className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600">
                                                {cat.replace(/-/g, ' ')}
                                            </span>
                                        ))
                                    ) : (
                                        project.category && (
                                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600">
                                                {project.category}
                                            </span>
                                        )
                                    )}
                                </div>

                                <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-wider">
                                    {project.titleObj ? project.titleObj.zh : (typeof project.title === 'string' ? project.title : project.title.zh)}
                                </h2>
                                {project.titleObj && (
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-600">
                                        {project.titleObj.en}
                                    </h2>
                                )}

                                {(() => {
                                    const subtitle = project.titleObj?.subtitle || project.subtitle;
                                    if (!subtitle) return null;
                                    // 分離中文和英文（假設格式為 "中文 英文"）
                                    const parts = subtitle.split(/(?=[A-Za-z])/);
                                    const zhPart = parts[0]?.trim() || '';
                                    const enPart = parts.slice(1).join('').trim() || '';
                                    return (
                                        <div className="space-y-1">
                                            {zhPart && <h3 className="text-xl md:text-2xl text-gray-600 font-medium tracking-wider">{zhPart}</h3>}
                                            {enPart && <h3 className="text-base md:text-lg text-gray-600 font-medium tracking-wider">{enPart}</h3>}
                                        </div>
                                    );
                                })()}

                                {project.oneLiner && (
                                    <div className="mt-6 p-6 bg-white">
                                        {renderBilingual(project.oneLiner)}
                                    </div>
                                )}

                                {project.tags && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Key Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-gray-200">
                                {project.location && (
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 mb-2">Location</h4>
                                        <p className="text-sm font-medium tracking-wider">{project.location}</p>
                                    </div>
                                )}
                                {project.role && (
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 mb-2">Role</h4>
                                        <p className="text-sm font-medium tracking-wider">{project.role}</p>
                                    </div>
                                )}
                                {project.duration && (
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 mb-2">Duration</h4>
                                        <p className="text-sm font-medium tracking-wider">{project.duration}</p>
                                    </div>
                                )}
                                {(project.designers || project.team) && (
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 mb-2">Team / Designers</h4>
                                        <p className="text-sm font-medium tracking-wider">
                                            {project.designers ? project.designers.join(', ') : project.team?.join(', ')}
                                        </p>
                                    </div>
                                )}
                                {project.instructor && (
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 mb-2">Instructor</h4>
                                        <p className="text-sm font-medium tracking-wider">{project.instructor}</p>
                                    </div>
                                )}
                                {project.awards && project.awards.length > 0 && (
                                    <div className="md:col-span-2">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-orange)] mb-2">Awards</h4>
                                        <div className="space-y-2">
                                            {project.awards.map((award: string, i: number) => {
                                                // 提取獎項類型 tag
                                                const awardTags: string[] = [];
                                                if (award.includes('入圍')) awardTags.push('入圍');
                                                if (award.includes('銅獎')) awardTags.push('銅獎');
                                                if (award.includes('佳作')) awardTags.push('佳作');
                                                if (award.includes('銀獎')) awardTags.push('銀獎');
                                                if (award.includes('金獎')) awardTags.push('金獎');
                                                
                                                // 從 award 文字中移除獎項類型
                                                const removeAwardTagsFromText = (text: string): string => {
                                                    let cleaned = text;
                                                    const awardTypes = ['入圍', '銅獎', '佳作', '銀獎', '金獎', '第一名', '第二名', '第三名', '第四名', '入圍決選'];
                                                    
                                                    awardTypes.forEach(type => {
                                                        cleaned = cleaned.replace(new RegExp(`\\s*-\\s*${type}`, 'g'), '');
                                                        cleaned = cleaned.replace(new RegExp(type, 'g'), '');
                                                    });
                                                    
                                                    cleaned = cleaned.replace(/\s*-\s*$/g, '').replace(/\s*-\s*-/g, '-').trim();
                                                    return cleaned;
                                                };
                                                
                                                const cleanedAward = removeAwardTagsFromText(award);
                                                
                                                return (
                                                    <div key={i} className="flex items-start gap-2">
                                                        <p className="text-sm font-medium tracking-wider flex-1">{cleanedAward}</p>
                                                        {awardTags.length > 0 && (
                                                            <div className="flex flex-wrap gap-1">
                                                                {awardTags.map((tag, j) => (
                                                                    <span key={j} className="text-xs font-bold text-gray-600 uppercase tracking-[0.15em] border border-gray-500 px-2 py-0.5 rounded-sm">
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Features */}
                            {project.features && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">核心功能 / Core Features</h3>
                                    <div className="space-y-4">
                                        {project.features.zh && project.features.zh.length > 0 && (
                                            <div>
                                                <ul className="space-y-2">
                                                    {project.features.zh.map((feature, i) => (
                                                        <li key={i} className="text-gray-800 leading-relaxed tracking-wider flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {project.features.en && project.features.en.length > 0 && (
                                            <div>
                                                <ul className="space-y-2">
                                                    {project.features.en.map((feature, i) => (
                                                        <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Technical Highlights */}
                            {project.technicalHighlights && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">技術亮點 / Technical Highlights</h3>
                                    <div className="space-y-4">
                                        {project.technicalHighlights.zh && project.technicalHighlights.zh.length > 0 && (
                                            <div>
                                                <ul className="space-y-2">
                                                    {project.technicalHighlights.zh.map((highlight, i) => (
                                                        <li key={i} className="text-gray-800 leading-relaxed tracking-wider flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span dangerouslySetInnerHTML={{ __html: highlight.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {project.technicalHighlights.en && project.technicalHighlights.en.length > 0 && (
                                            <div>
                                                <ul className="space-y-2">
                                                    {project.technicalHighlights.en.map((highlight, i) => (
                                                        <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span dangerouslySetInnerHTML={{ __html: highlight.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Architecture */}
                            {project.architecture && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">架構設計 / Architecture</h3>
                                    <div className="space-y-4">
                                        {project.architecture.zh && project.architecture.zh.length > 0 && (
                                            <div>
                                                <ul className="space-y-2">
                                                    {project.architecture.zh.map((item, i) => (
                                                        <li key={i} className="text-gray-800 leading-relaxed tracking-wider flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {project.architecture.en && project.architecture.en.length > 0 && (
                                            <div>
                                                <ul className="space-y-2">
                                                    {project.architecture.en.map((item, i) => (
                                                        <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Page Details */}
                            {project.pageDetails && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">頁面功能 / Page Features</h3>
                                    <div className="space-y-4">
                                        {Object.keys(project.pageDetails.zh || {}).length > 0 && (
                                            <div>
                                                <div className="space-y-3">
                                                    {Object.entries(project.pageDetails.zh).map(([key, value]) => (
                                                        <div key={key}>
                                                            <h5 className="font-bold text-gray-900 mb-1 capitalize">{key}</h5>
                                                            <p className="text-gray-800 leading-relaxed tracking-wider text-sm" dangerouslySetInnerHTML={{ __html: (value || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {Object.keys(project.pageDetails.en || {}).length > 0 && (
                                            <div>
                                                <div className="space-y-3">
                                                    {Object.entries(project.pageDetails.en).map(([key, value]) => (
                                                        <div key={key}>
                                                            <h5 className="font-bold text-gray-700 mb-1 capitalize">{key}</h5>
                                                            <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: (value || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Future Features */}
                            {project.futureFeatures && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">未來功能 / Future Features</h3>
                                    <div className="space-y-4">
                                        {project.futureFeatures.zh && project.futureFeatures.zh.length > 0 && (
                                            <div>
                                                <ul className="space-y-2">
                                                    {project.futureFeatures.zh.map((feature, i) => (
                                                        <li key={i} className="text-gray-800 leading-relaxed tracking-wider flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {project.futureFeatures.en && project.futureFeatures.en.length > 0 && (
                                            <div>
                                                <ul className="space-y-2">
                                                    {project.futureFeatures.en.map((feature, i) => (
                                                        <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Project Structure */}
                            {project.projectStructure && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">專案結構 / Project Structure</h3>
                                    {project.projectStructure.description && (
                                        <div className="mb-4">
                                            {renderBilingual(project.projectStructure.description)}
                                        </div>
                                    )}
                                    {project.projectStructure.folders && (
                                        <div className="space-y-2">
                                            {Object.entries(project.projectStructure.folders).map(([folder, description]) => (
                                                <div key={folder} className="flex items-start">
                                                    <span className="font-mono text-sm font-bold text-gray-700 mr-3 min-w-[100px]">{folder}/</span>
                                                    <span className="text-gray-600 text-sm">{description}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Links */}
                            {(project.github || project.liveDemo) && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">連結 / Links</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-orange)] hover:underline"
                                            >
                                                GitHub →
                                            </a>
                                        )}
                                        {project.liveDemo && (
                                            <a 
                                                href={project.liveDemo} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-orange)] hover:underline"
                                            >
                                                Live Demo →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}

                        

                            {/* Concept */}
                            {project.concept && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">Design Concept</h3>
                                    <div className="space-y-6 text-gray-600 leading-relaxed">
                                        {Object.entries(project.concept).map(([key, value]: [string, any]) => (
                                            <div key={key}>
                                                <h4 className="font-bold text-gray-900 capitalize mb-2 tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                                {renderBilingual(value)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Research Process */}
                            {project.researchProcess && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">Research Process</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {project.researchProcess.map((item: any, i: number) => (
                                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                                <div className="font-bold text-gray-900 mb-2">
                                                    {renderBilingual(item.method)}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {renderBilingual(item.description)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Design Focus */}
                            {project.designFocus && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">Design Focus</h3>
                                    <div className="space-y-6">
                                        {project.designFocus.map((item: any, i: number) => (
                                            <div key={i}>
                                                <h4 className="font-bold text-gray-900 mb-2">
                                                    {renderBilingual(item.area)}
                                                </h4>
                                                <div className="text-gray-600 pl-4 border-l-2 border-gray-200">
                                                    {renderBilingual(item.description)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Expected Outcomes */}
                            {project.expectedOutcomes && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">Expected Outcomes</h3>
                                    <ul className="list-disc list-outside pl-5 space-y-3 text-gray-600">
                                        {project.expectedOutcomes.map((outcome: any, i: number) => (
                                            <li key={i}>
                                                {renderBilingual(outcome)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Strategy */}
                            {project.designStrategy && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">Design Strategy</h3>
                                    <div className="space-y-6 text-gray-600 leading-relaxed">
                                        {Object.entries(project.designStrategy).map(([key, value]: [string, any]) => {
                                            if (Array.isArray(value)) {
                                                return (
                                                    <div key={key}>
                                                        <h4 className="font-bold text-gray-900 capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                                        <ul className="list-disc list-outside pl-5 space-y-3">
                                                            {value.map((item: any, i: number) => (
                                                                <li key={i}>
                                                                    {typeof item === 'string' ? item : (
                                                                        <div className="flex flex-col gap-1">
                                                                            {/* Handle { element: {zh, en}, description: {zh, en} } */}
                                                                            {item.element && (
                                                                                <div className="font-bold text-gray-800">
                                                                                    {renderBilingual(item.element)}
                                                                                </div>
                                                                            )}

                                                                            {/* Handle description object */}
                                                                            {item.description && (
                                                                                <div className="text-gray-600">
                                                                                    {renderBilingual(item.description)}
                                                                                </div>
                                                                            )}

                                                                            {/* Handle direct bilingual object in array */}
                                                                            {!item.element && !item.description && (item.zh || item.en) && (
                                                                                renderBilingual(item)
                                                                            )}

                                                                            {/* Handle old structure { material, use } */}
                                                                            {item.material && (
                                                                                <div>
                                                                                    <span className="font-bold">{item.material}</span>
                                                                                    {item.use && <span> - {item.use}</span>}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                );
                                            } else if (typeof value === 'object' && value !== null && !value.zh && !value.en) {
                                                return (
                                                    <div key={key}>
                                                        <h4 className="font-bold text-gray-900 capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                                        <div className="pl-4 space-y-2">
                                                            {Object.entries(value).map(([subKey, subValue]: [string, any]) => (
                                                                <div key={subKey}>
                                                                    <span className="font-medium capitalize">{subKey}: </span>
                                                                    {Array.isArray(subValue) ? (
                                                                        <span className="text-sm">{subValue.join(', ')}</span>
                                                                    ) : (
                                                                        <div>{renderBilingual(subValue)}</div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div key={key}>
                                                        <h4 className="font-bold text-gray-900 capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                                        {renderBilingual(value)}
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Experience Design */}
                            {project.experienceDesign && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">Experience Design</h3>
                                    <div className="space-y-6 text-gray-600 leading-relaxed">
                                        {Object.entries(project.experienceDesign).map(([key, value]: [string, any]) => (
                                            <div key={key}>
                                                <h4 className="font-bold text-gray-900 capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                                {Array.isArray(value) ? (
                                                    <ul className="list-disc list-outside pl-5 space-y-1">
                                                        {value.map((item: any, i: number) => (
                                                            <li key={i}>
                                                                {typeof item === 'string' ? item : renderBilingual(item)}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    renderBilingual(value)
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tags */}
                            {/* {project.tags && (
                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((t: string) => (
                                            <span key={t} className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600 font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )} */}

                            {/* Gallery Images - 穿插顯示圖片 */}
                            {project.imagesObj && (
                                <div className="space-y-8">
                                    {/* Hero Image */}
                                    {project.imagesObj.hero && (
                                        <div className="w-full aspect-video relative overflow-hidden rounded-lg shadow-lg">
                                            <Image
                                                src={project.imagesObj.hero}
                                                alt={project.titleObj?.zh || (typeof project.title === 'string' ? project.title : project.title.zh) || 'Project Image'}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    )},

                                    {/* 渲染圖 */}
                                    {project.imagesObj.renders && Array.isArray(project.imagesObj.renders) && project.imagesObj.renders.length > 0 && (
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold tracking-wider">渲染圖 / Renders</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.imagesObj.renders.map((img: string, i: number) => (
                                                    <div key={i} className="w-full aspect-video relative overflow-hidden rounded-lg shadow-md">
                                                        <Image
                                                            src={img}
                                                            alt={`Render ${i + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* 平面圖 */}
                                    {project.imagesObj.plans && Array.isArray(project.imagesObj.plans) && project.imagesObj.plans.length > 0 && (
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold tracking-wider">平面圖 / Plans</h3>
                                            <div className="space-y-4">
                                                {project.imagesObj.plans.map((img: string, i: number) => (
                                                    <div key={i} className="w-full relative overflow-hidden rounded-lg shadow-md">
                                                        <Image
                                                            src={img}
                                                            alt={`Plan ${i + 1}`}
                                                            width={1200}
                                                            height={800}
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* 剖面圖 */}
                                    {project.imagesObj.sections && Array.isArray(project.imagesObj.sections) && project.imagesObj.sections.length > 0 && (
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold tracking-wider">剖面圖 / Sections</h3>
                                            <div className="space-y-4">
                                                {project.imagesObj.sections.map((img: string, i: number) => (
                                                    <div key={i} className="w-full relative overflow-hidden rounded-lg shadow-md">
                                                        <Image
                                                            src={img}
                                                            alt={`Section ${i + 1}`}
                                                            width={1200}
                                                            height={800}
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* 數位專案的截圖 */}
                                    {(project.imagesObj.login || project.imagesObj.labels || project.imagesObj.issueList || project.imagesObj.issuePage) && (
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold tracking-wider">介面截圖 / Screenshots</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.imagesObj.login && (
                                                    <div className="w-full aspect-video relative overflow-hidden rounded-lg shadow-md">
                                                        <Image
                                                            src={project.imagesObj.login}
                                                            alt="Login"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}
                                                {project.imagesObj.labels && (
                                                    <div className="w-full aspect-video relative overflow-hidden rounded-lg shadow-md">
                                                        <Image
                                                            src={project.imagesObj.labels}
                                                            alt="Labels"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}
                                                {project.imagesObj.issueList && (
                                                    <div className="w-full aspect-video relative overflow-hidden rounded-lg shadow-md">
                                                        <Image
                                                            src={project.imagesObj.issueList}
                                                            alt="Issue List"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}
                                                {project.imagesObj.issuePage && (
                                                    <div className="w-full aspect-video relative overflow-hidden rounded-lg shadow-md">
                                                        <Image
                                                            src={project.imagesObj.issuePage}
                                                            alt="Issue Page"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* 單張平面圖 */}
                                    {project.imagesObj.plan && (
                                        <div className="w-full relative overflow-hidden rounded-lg shadow-md">
                                            <Image
                                                src={project.imagesObj.plan}
                                                alt="Plan"
                                                width={1200}
                                                height={800}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                               {/* Design Value */}
                               {project.designValue && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-wider">Design Value</h3>
                                    <div className="p-6 bg-white rounded-lg space-y-4">
                                        {project.designValue.forISS && (
                                            <div>
                                                {/* <h4 className="font-bold text-gray-900 mb-2">For ISS</h4> */}
                                                {renderBilingual(project.designValue.forISS)}
                                            </div>
                                        )}
                                        {project.designValue.skills && (
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Key Skills</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.designValue.skills.map((skill, i) => (
                                                        <span key={i} className="text-xs bg-white border border-gray-300 px-2 py-1 rounded text-gray-700">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                            </div>
                            )}
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
