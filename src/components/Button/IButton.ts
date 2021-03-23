export type ButtonTypes = 'balck' | 'circle' | 'default'

export type ButtonProps = {
  text?: string
  type?: ButtonTypes
  icon?: string
  onClick: (e: React.MouseEvent) => void
}
