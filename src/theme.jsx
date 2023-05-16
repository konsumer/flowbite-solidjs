import { createContext, useContext } from 'solid-js'
import * as icons from '@/icons'

// Flat object, keyed with component-names
// use strings to output the tailwind classes
export const defaultTheme = {
  classes: {
    Accordian: '',
    AccordianHeading: '',
    AcordianHeadingButton: 'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
    AccordianBody: 'p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'
  },
  icons
}

const context = createContext(defaultTheme)

export const useTheme = () => useContext(context)

export function ThemeProvider ({ theme = {}, children }) {
  return <context.Provider value={{ ...defaultTheme, ...theme }}>{children}</context.Provider>
}
