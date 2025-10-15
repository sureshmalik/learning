import React from 'react';

// Reusable Code Block Component with Beautiful Styling
const CodeBlock = ({ code, title = '', language = 'python', variant = 'default' }) => {
  // Different color schemes for variety
  const variants = {
    default: {
      wrapper: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
      border: 'border-blue-300',
      badge: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      icon: '💻'
    },
    success: {
      wrapper: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
      border: 'border-green-300',
      badge: 'bg-gradient-to-r from-green-500 to-emerald-600',
      icon: '✅'
    },
    warning: {
      wrapper: 'bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50',
      border: 'border-orange-300',
      badge: 'bg-gradient-to-r from-orange-500 to-red-600',
      icon: '⚠️'
    },
    info: {
      wrapper: 'bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50',
      border: 'border-cyan-300',
      badge: 'bg-gradient-to-r from-cyan-500 to-blue-600',
      icon: 'ℹ️'
    },
    purple: {
      wrapper: 'bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50',
      border: 'border-purple-300',
      badge: 'bg-gradient-to-r from-purple-500 to-fuchsia-600',
      icon: '🎨'
    }
  };

  const style = variants[variant] || variants.default;

  return (
    <div className={`${style.wrapper} p-5 rounded-xl border-2 ${style.border} shadow-md my-4`}>
      {title && (
        <div className="flex items-center mb-3">
          <span className={`${style.badge} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow`}>
            {style.icon} {title.toUpperCase()}
          </span>
        </div>
      )}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm leading-loose overflow-x-auto border border-gray-700">
        {code}
      </pre>
    </div>
  );
};

export default CodeBlock;
