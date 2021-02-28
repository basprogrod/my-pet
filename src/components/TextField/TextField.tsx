import { ChangeEvent, useState } from 'react'

type TextFieldProps = {
  value: string
}

const TextField = ({ value }: TextFieldProps) => {
  const [state, setState] = useState('')

  const handleChange = (e: any) => {
    setState(e.target.value)
  }

  return <textarea value={state} onChange={handleChange} />
}

export default TextField
