/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#F7F8FA',
        'text-dark': '#333',
        'text-medium': '#6B7280',
        'text-light': '#FFFFFF',
        'card-bg': '#FFFFFF',
        'border-grey': '#E5E7EB',
        'mpesa-green': '#2ECC71',
        'bank-blue': '#3498DB',
        'wallet-purple': '#9B59B6',
        'accent-blue': '#007BFF',
        'warning-yellow': '#FFC107',
        'danger-red': '#DC3545',
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
