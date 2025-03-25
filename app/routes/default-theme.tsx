import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Default Theme' }, { name: 'description', content: 'A basic theme demo with default styling' }];
};

export default function DefaultTheme() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Default Theme</h1>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 bg-white dark:bg-gray-800 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Basic Theme Test</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This page demonstrates a simpler theme implementation with basic Tailwind dark/light classes. Try switching
          themes using the toggle at the top.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          This approach uses Tailwind's dark mode with class strategy.
        </p>
      </div>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 bg-white dark:bg-gray-800 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Default Components</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Here are some basic components styled with Tailwind's default dark/light classes.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md px-4 py-2 font-medium">
            Primary Button
          </button>
          <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 rounded-md px-4 py-2 font-medium">
            Secondary Button
          </button>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Input Example</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter some text..."
          />
        </div>

        <div className="mt-6 flex items-center">
          <input
            id="checkbox"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="checkbox" className="ml-2 block text-gray-700 dark:text-gray-300">
            Checkbox example
          </label>
        </div>
      </div>
    </div>
  );
}
