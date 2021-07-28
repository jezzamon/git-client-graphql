import React, { PropsWithChildren, FC, ReactNode, useRef } from 'react'

export type FormValues = {
  textbox: string[]
}

// Unfortunately react-blessed does not trigger the form onSubmit automatically when its inputs are submitted, so we have to have this hack here.
type FormProps = {
  onSubmit(values: FormValues): void
  children(triggerSubmit: () => void): ReactNode
}

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
  const form = useRef<any>()

  const triggerSubmit = () => {
    form.current.submit()
  }

  React.useEffect(() => {
    setTimeout(() => {
      form.current.focus()
    }, 0)
  }, [])

  return (
    <blessed-form
      top={3}
      keys
      focused
      ref={form}
      style={{
        bg: 'white',
      }}
      onSubmit={onSubmit}
    >
      {children(triggerSubmit)}
    </blessed-form>
  )
}
