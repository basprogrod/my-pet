import { SetStateAction, useState } from "react"

export default () => {
  const [img, setImg] = useState<any>('') // problem any

  const handleSetImg = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement

    if (!(input.files?.length)) return 

    const reader = new FileReader()

    reader.readAsDataURL(input.files[0])
    reader.onload = () => {
      setImg(reader.result)
    }
  }

  return {img, handleSetImg}
}