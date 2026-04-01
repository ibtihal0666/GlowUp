import { useState, useEffect } from 'react';
import { RoutineItem } from '../lib/types';

export function useDailyRoutine(dateStr: string) {
  const [routine, setRoutine] = useState<RoutineItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getStorageKey = (date: string) => `glowbit_routine_${date}`;

  useEffect(() => {
    const key = getStorageKey(dateStr);
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        setRoutine(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse routine', e);
        setRoutine([]);
      }
    } else {
      setRoutine([]);
    }
    setIsLoaded(true);
  }, [dateStr]);

  const saveRoutine = (newRoutine: RoutineItem[]) => {
    setRoutine(newRoutine);
    localStorage.setItem(getStorageKey(dateStr), JSON.stringify(newRoutine));
  };

  const toggleItem = (productId: string) => {
    const newRoutine = routine.map(item => 
      item.productId === productId 
        ? { ...item, completed: !item.completed } 
        : item
    );
    saveRoutine(newRoutine);
  };

  return {
    routine,
    isLoaded,
    saveRoutine,
    toggleItem
  };
}
