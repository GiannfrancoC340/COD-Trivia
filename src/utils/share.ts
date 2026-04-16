export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      return false;
    }
  };
  
  export const generateGame1ShareText = (
    guesses: number,
    won: boolean
  ): string => {
    const title = 'CoD Trivia - Guess the Pro';
    const result = won ? `${guesses}/6` : 'X/6';
    
    // Generate emoji grid (one emoji per guess)
    const emojis = Array(guesses).fill('🟥');
    if (won) {
      emojis[guesses - 1] = '🟩'; // Last guess is green if won
    }
    
    const grid = emojis.join('');
    
    return `${title}\n${grid} ${result}`;
  };
  
  export const generateGame2ShareText = (
    guesses: number,
    won: boolean
  ): string => {
    const title = 'CoD Trivia - Championship Memory';
    const result = won ? `${guesses}/6` : 'X/6';
    
    // Generate emoji grid
    const emojis = Array(guesses).fill('🟥');
    if (won) {
      emojis[guesses - 1] = '🟩'; // Last guess is green if won
    }
    
    const grid = emojis.join('');
    
    return `${title}\n${grid} ${result}`;
  };