"use client";

import { createContext, useContext, useState } from "react";

const ScreensaverContext = createContext();

export const ScreensaverProvider = ({ children }) => {
  const [screensaverDisabled, setScreensaverDisabled] = useState(false);

  return (
    <ScreensaverContext.Provider
      value={{ screensaverDisabled, setScreensaverDisabled }}
    >
      {children}
    </ScreensaverContext.Provider>
  );
};

export const useScreensaverContext = () => useContext(ScreensaverContext);
