// Theme toggle functionality
(function() {
    const STORAGE_KEY = 'theme-preference';
    
    // Get user's theme preference
    function getThemePreference() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return stored;
        }
        // Default to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // 等待 DOM 加载完成
    function initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        
        if (!themeToggle || !sunIcon || !moonIcon) {
            console.error('Theme toggle elements not found', {
                themeToggle: !!themeToggle,
                sunIcon: !!sunIcon,
                moonIcon: !!moonIcon
            });
            return;
        }
        
        // Apply theme to document
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
        }
        
        // Toggle theme
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            localStorage.setItem(STORAGE_KEY, newTheme);
            applyTheme(newTheme);
        }
        
        // Initialize theme on page load
        const theme = getThemePreference();
        applyTheme(theme);
        
        // Listen for theme toggle clicks
        themeToggle.addEventListener('click', toggleTheme);
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't set a preference
            if (!localStorage.getItem(STORAGE_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    // 初始化主题
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();

