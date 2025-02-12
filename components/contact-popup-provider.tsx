"use client"

import React, { createContext, useState, useContext } from 'react'
import { ContactPopup } from './contact-popup'

interface ContactPopupContextType {
  isContactPopupOpen: boolean
  setIsContactPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContactPopupContext = createContext<ContactPopupContextType>({
  isContactPopupOpen: false,
  setIsContactPopupOpen: () => {},
})

export const ContactPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  return (
    <ContactPopupContext.Provider value={{ isContactPopupOpen, setIsContactPopupOpen }}>
      {children}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </ContactPopupContext.Provider>
  )
}

export const useContactPopup = () => useContext(ContactPopupContext)

