// theme-toggle.js - Dark mode functionality

// Check for saved theme preference or system preference
function setThemePreference() {
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Set theme on initial load
document.addEventListener('DOMContentLoaded', setThemePreference);

// Toggle between dark and light mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
}

// Also listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemePreference);

// Export for use in other files
export { toggleDarkMode, setThemePreference };