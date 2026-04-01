import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'pink' | 'purple';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: 'pink',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('glowbit_theme');
    return (savedTheme === 'purple' || savedTheme === 'pink') ? savedTheme : 'pink';
  });

  useEffect(() => {
    localStorage.setItem('glowbit_theme', theme);
    const root = window.document.documentElement;
    
    if (theme === 'purple') {
      root.classList.add('theme-purple');
    } else {
      root.classList.remove('theme-purple');
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
