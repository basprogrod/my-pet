export type QuantityProps = {
  quantity: number | string
  onSelect: (flag: boolean) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
