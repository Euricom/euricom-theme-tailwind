import { MetaFunction } from '@remix-run/node';
import { useState } from 'react';

export const meta: MetaFunction = () => {
    return [{ title: 'Default Theme' }, { name: 'description', content: 'A basic theme demo with default styling' }];
};

export default function DefaultTheme() {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    // Main brand colors with their OKLCH values and tints
    const brandColors = [
        {
            name: 'Euri Green',
            color: 'euri-green',
            value: 'oklch(0.87 0.29 142.5)',
            variable: 'var(--color-euri-green)',
            tints: [
                { name: '50', color: 'euri-green-50', variable: 'var(--color-euri-green-50)' },
                { name: '100', color: 'euri-green-100', variable: 'var(--color-euri-green-100)' },
                { name: '200', color: 'euri-green-200', variable: 'var(--color-euri-green-200)' },
                { name: '300', color: 'euri-green-300', variable: 'var(--color-euri-green-300)' },
                { name: 'Base', color: 'euri-green', variable: 'var(--color-euri-green)' },
                { name: '500', color: 'euri-green-500', variable: 'var(--color-euri-green-500)' },
                { name: '600', color: 'euri-green-600', variable: 'var(--color-euri-green-600)' },
                { name: '700', color: 'euri-green-700', variable: 'var(--color-euri-green-700)' },
                { name: '800', color: 'euri-green-800', variable: 'var(--color-euri-green-800)' },
                { name: '900', color: 'euri-green-900', variable: 'var(--color-euri-green-900)' },
            ]
        },
        {
            name: 'Euri Charcoal',
            color: 'euri-charcoal',
            value: 'oklch(0.26 0.02 248.56)',
            variable: 'var(--color-euri-charcoal)',
            tints: [
                { name: '50', color: 'euri-charcoal-50', variable: 'var(--color-euri-charcoal-50)' },
                { name: '100', color: 'euri-charcoal-100', variable: 'var(--color-euri-charcoal-100)' },
                { name: '200', color: 'euri-charcoal-200', variable: 'var(--color-euri-charcoal-200)' },
                { name: '300', color: 'euri-charcoal-300', variable: 'var(--color-euri-charcoal-300)' },
                { name: '400', color: 'euri-charcoal-400', variable: 'var(--color-euri-charcoal-400)' },
                { name: '500', color: 'euri-charcoal-500', variable: 'var(--color-euri-charcoal-500)' },
                { name: 'Base', color: 'euri-charcoal', variable: 'var(--color-euri-charcoal)' },
                { name: '700', color: 'euri-charcoal-700', variable: 'var(--color-euri-charcoal-700)' },
                { name: '800', color: 'euri-charcoal-800', variable: 'var(--color-euri-charcoal-800)' },
                { name: '900', color: 'euri-charcoal-900', variable: 'var(--color-euri-charcoal-900)' },
            ]
        },
        {
            name: 'Euri Midnight',
            color: 'euri-midnight',
            value: 'oklch(0.34 0.06 205.39)',
            variable: 'var(--color-euri-midnight)',
            tints: [
                { name: '50', color: 'euri-midnight-50', variable: 'var(--color-euri-midnight-50)' },
                { name: '100', color: 'euri-midnight-100', variable: 'var(--color-euri-midnight-100)' },
                { name: '200', color: 'euri-midnight-200', variable: 'var(--color-euri-midnight-200)' },
                { name: '300', color: 'euri-midnight-300', variable: 'var(--color-euri-midnight-300)' },
                { name: '400', color: 'euri-midnight-400', variable: 'var(--color-euri-midnight-400)' },
                { name: '500', color: 'euri-midnight-500', variable: 'var(--color-euri-midnight-500)' },
                { name: 'Base', color: 'euri-midnight', variable: 'var(--color-euri-midnight)' },
                { name: '700', color: 'euri-midnight-700', variable: 'var(--color-euri-midnight-700)' },
                { name: '800', color: 'euri-midnight-800', variable: 'var(--color-euri-midnight-800)' },
                { name: '900', color: 'euri-midnight-900', variable: 'var(--color-euri-midnight-900)' },
            ]
        },
        {
            name: 'Euri Steel Gray',
            color: 'euri-steel-gray',
            value: 'oklch(0.87 0.02 202.03)',
            variable: 'var(--color-euri-steel-gray)',
            tints: [
                { name: '50', color: 'euri-steel-gray-50', variable: 'var(--color-euri-steel-gray-50)' },
                { name: '100', color: 'euri-steel-gray-100', variable: 'var(--color-euri-steel-gray-100)' },
                { name: '200', color: 'euri-steel-gray-200', variable: 'var(--color-euri-steel-gray-200)' },
                { name: '300', color: 'euri-steel-gray-300', variable: 'var(--color-euri-steel-gray-300)' },
                { name: '400', color: 'euri-steel-gray-400', variable: 'var(--color-euri-steel-gray-400)' },
                { name: 'Base', color: 'euri-steel-gray', variable: 'var(--color-euri-steel-gray)' },
                { name: '600', color: 'euri-steel-gray-600', variable: 'var(--color-euri-steel-gray-600)' },
                { name: '700', color: 'euri-steel-gray-700', variable: 'var(--color-euri-steel-gray-700)' },
                { name: '800', color: 'euri-steel-gray-800', variable: 'var(--color-euri-steel-gray-800)' },
                { name: '900', color: 'euri-steel-gray-900', variable: 'var(--color-euri-steel-gray-900)' },
            ]
        },
    ];

    // Function to copy color value to clipboard
    const copyToClipboard = (value: string, type: string, colorName: string) => {
        navigator.clipboard.writeText(value);
        setCopiedColor(`${colorName} - ${type}: ${value}`);

        // Clear the "Copied!" message after 2 seconds
        setTimeout(() => {
            setCopiedColor(null);
        }, 2000);
    };

    // Generate a unique ID for hover tracking
    const getSectionId = (colorName: string, type: string) => `${colorName}-${type}`;

    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold text-center">Default Theme</h1>

            {/* Color Palette Section */}
            <section className="border-1 border-base-100 dark:border-base-300  rounded-lg p-8 bg-base text-base-content shadow-sm dark:bg-base-200 ">
                <h2 className="text-2xl font-semibold mb-4">Euricom Brand Colors</h2>
                <p className="mb-6">
                    The main color palette used in the Euricom design system. Click on any value to copy it to your clipboard.
                    Each brand color includes all tint variants shown as small squares.
                </p>

                {/* Color copied notification */}
                {copiedColor && (
                    <div className="fixed top-4 right-4 bg-success text-success-content px-4 py-2 rounded-md shadow-md z-50 animate-in fade-in duration-200">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17L4 12"></path>
                            </svg>
                            <span>Copied: {copiedColor}</span>
                        </div>
                    </div>
                )}

                {/* Brand Colors Section - Primary focus */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold border-b pb-2">Brand Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {brandColors.map((color) => (
                            <div
                                key={color.color}
                                className="flex flex-col rounded-lg overflow-hidden border border-euri-steel-gray-200 dark:border-euri-charcoal-700 shadow-sm"
                            >
                                <div
                                    className="h-36 relative group"
                                    style={{ backgroundColor: color.variable }}
                                    onClick={() => copyToClipboard(color.value, 'OKLCH', color.name)}
                                >
                                    {/* Tint boxes displayed in the corner */}
                                    <div className="absolute bottom-3 right-3 grid grid-cols-5 gap-1 z-10">
                                        {color.tints.map((tint) => (
                                            <div
                                                key={tint.color}
                                                className="w-5 h-5 rounded-sm border border-white/30 dark:border-black/30 shadow-sm cursor-pointer hover:scale-110 transition-transform"
                                                style={{ backgroundColor: tint.variable }}
                                                title={`${color.name} ${tint.name}`}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent triggering parent onClick
                                                    copyToClipboard(`var(--color-${tint.color})`, 'CSS', `${color.name} ${tint.name}`);
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Copy icon overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <div className="bg-white/90 dark:bg-euri-charcoal-800/90 rounded-full p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-base">
                                    <h4 className="text-lg font-semibold mb-1">{color.name}</h4>
                                    <div className="space-y-2">
                                        <div
                                            className={`flex cursor-pointer items-center justify-between rounded px-3 py-2 transition-colors ${hoveredSection === getSectionId(color.name, 'OKLCH')
                                                ? 'bg-euri-steel-gray-200 dark:bg-euri-charcoal-700'
                                                : 'bg-euri-steel-gray-100 dark:bg-euri-charcoal-800 hover:bg-euri-steel-gray-200 dark:hover:bg-euri-charcoal-700'
                                                }`}
                                            onClick={() => copyToClipboard(color.value, 'OKLCH', color.name)}
                                            onMouseEnter={() => setHoveredSection(getSectionId(color.name, 'OKLCH'))}
                                            onMouseLeave={() => setHoveredSection(null)}
                                            title="Click to copy OKLCH value"
                                        >
                                            <span className="text-sm font-mono">OKLCH: </span>
                                            <div className="flex items-center gap-1">
                                                <code className="text-sm">{color.value}</code>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className={`flex cursor-pointer items-center justify-between rounded px-3 py-2 transition-colors ${hoveredSection === getSectionId(color.name, 'CSS')
                                                ? 'bg-euri-steel-gray-200 dark:bg-euri-charcoal-700'
                                                : 'bg-euri-steel-gray-100 dark:bg-euri-charcoal-800 hover:bg-euri-steel-gray-200 dark:hover:bg-euri-charcoal-700'
                                                }`}
                                            onClick={() => copyToClipboard(`var(--color-${color.color})`, 'CSS', color.name)}
                                            onMouseEnter={() => setHoveredSection(getSectionId(color.name, 'CSS'))}
                                            onMouseLeave={() => setHoveredSection(null)}
                                            title="Click to copy CSS variable"
                                        >
                                            <span className="text-sm font-mono">CSS: </span>
                                            <div className="flex items-center gap-1">
                                                <code className="text-sm">var(--color-{color.color})</code>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className={`flex cursor-pointer items-center justify-between rounded px-3 py-2 transition-colors ${hoveredSection === getSectionId(color.name, 'Tailwind')
                                                ? 'bg-euri-steel-gray-200 dark:bg-euri-charcoal-700'
                                                : 'bg-euri-steel-gray-100 dark:bg-euri-charcoal-800 hover:bg-euri-steel-gray-200 dark:hover:bg-euri-charcoal-700'
                                                }`}
                                            onClick={() => copyToClipboard(`bg-${color.color}`, 'Tailwind', color.name)}
                                            onMouseEnter={() => setHoveredSection(getSectionId(color.name, 'Tailwind'))}
                                            onMouseLeave={() => setHoveredSection(null)}
                                            title="Click to copy Tailwind class"
                                        >
                                            <span className="text-sm font-mono">Tailwind: </span>
                                            <div className="flex items-center gap-1">
                                                <code className="text-sm">bg-{color.color}</code>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-1 border-base-100 dark:border-base-300  rounded-lg p-8 bg-base text-base-content shadow-sm dark:bg-base-200 ">
                <h2 className="text-2xl font-semibold mb-4">Euricom Theme Components</h2>
                <p className="mb-4">
                    Here are components styled with Euricom's custom theme variables.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                    {/* Primary button */}
                    <button className="bg-primary text-primary-content inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs hover:bg-primary/80 transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus/20">
                        Primary
                    </button>

                    {/* Secondary button */}
                    <button className="bg-secondary text-secondary-content inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs hover:bg-secondary/90 transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus/20">
                        Secondary
                    </button>

                    {/* Destructive button */}
                    <button className="bg-error text-error-content inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus/20">
                        Destructive
                    </button>

                    {/* Outline button */}
                    <button className="border border-euri-charcoal dark:border-accent bg-transparent text-accent-content  hover:bg-accent/20 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus/20 dark:hover:bg-accent/70">
                        Outline
                    </button>

                    {/* Ghost button */}
                    <button className="hover:bg-accent hover:text-accent-content dark:hover:bg-accent/50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus/20">
                        Ghost
                    </button>

                    {/* Link button */}
                    <button className="text-primary hover:underline underline-offset-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus/20">
                        Link
                    </button>

                    {/* Disabled button */}
                    <button disabled className="bg-primary text-primary-content inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 shadow-xs transition-all opacity-50 cursor-not-allowed">
                        Disabled
                    </button>
                </div>


                <h3 className="text-xl font-semibold mt-8 mb-3">Form Controls</h3>

                {/* Input fields */}
                <div className="grid gap-6 max-w-sm">
                    <div>
                        <label className="text-sm font-medium mb-2 block">Default Input</label>
                        <input
                            type="text"
                            className="file:text-foreground placeholder:text-input-content/30 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-input-content shadow-xs focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/20"
                            placeholder="Type something..."
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-2 block">Textarea</label>
                        <textarea
                            className="file:text-foreground placeholder:text-input-content/30 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-h-[80px] w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-input-content shadow-xs focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/20"
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>




                </div>


            </section>
        </div>
    );
}
