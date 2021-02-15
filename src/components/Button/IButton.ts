export type ButtonTypes = 'balck' | 'circle'

export type ButtonProps = {
  text?: string
  type?: 'ButtonTypes' | string
  icon?: any
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}