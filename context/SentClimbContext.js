import { createContext, useContext, useState } from 'react';

const SentClimbContext = createContext();

export function SentClimbWrapper({ children }) {
  const [sentClimbs, setSentClimbs] = useState([]);

  return (
    <SentClimbContext.Provider value={(sentClimbs, setSentClimbs)}>
      {children}
    </SentClimbContext.Provider>
  );
}

export function useSentClimbContext() {
  return useContext(SentClimbContext);
}
