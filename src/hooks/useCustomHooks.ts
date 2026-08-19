import { useState, useEffect } from 'react';

export function useLiveUptime() {
  const [timeString, setTimeString] = useState('');
  const [uptimeSeconds, setUptimeSeconds] = useState(1850);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('es-GT', { hour12: false }));
      setUptimeSeconds(prev => prev + 1);
    }, 1000);

    const now = new Date();
    setTimeString(now.toLocaleTimeString('es-GT', { hour12: false }));

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = uptimeSeconds % 60;
  const uptimeFormatted = `${hours}h ${minutes}m ${seconds}s`;

  return { timeString, uptimeFormatted };
}

export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    });
  };

  return { copied, copyToClipboard };
}
