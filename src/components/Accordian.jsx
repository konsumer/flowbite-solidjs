import { createSignal, createContext, useContext } from 'solid-js'
import 'flowbite'

import { genId } from '@/utils'
import { useTheme } from '@/theme'

export const context = createContext({})

export function Accordian ({ name, ...props }) {
  const { classes } = useTheme()
  name ||= genId()
  return (
    <context.Provider value={{ name }}>
      <div data-accordion='collapse' {...props} class={`${props.class ? props.class : ''} ${classes.Accordian}`} />
    </context.Provider>
  )
}

export default Accordian

export function AccordianHeading ({ children, ...props }) {
  const { classes, icons: { IconAccordianDropdown } } = useTheme()
  const { name } = useContext(context)
  console.log(name)
  return (
    <h2 id={`accordion-collapse-heading-${name}`} {...props} class={`${props.class ? props.class : ''} ${classes.AccordianHeading}`}>
      <button type='button' data-accordion-target={`#accordion-collapse-body-${name}`} aria-expanded='true' aria-controls={`accordion-collapse-body-${name}`} class={classes.AccordianButton}>
        {children}
        <IconAccordianDropdown />
      </button>
    </h2>
  )
}

Accordian.Heading = AccordianHeading

export function AccordianBody ({ ...props }) {
  const { classes } = useTheme()
  const { name } = useContext(context)
  console.log(name)
  return (
    <div id={`accordion-collapse-body-${name}`} aria-labelledby={`accordion-collapse-heading-${name}`} {...props} class={`hidden ${props.class ? props.class : ''} ${classes.AccordianBody}`} />
  )
}
Accordian.Body = AccordianBody
