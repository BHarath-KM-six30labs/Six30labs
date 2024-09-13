

// type Props = {
//     text: string
// }

function Button({text}:{text: string}) {
  return (
    <button className="border border-black px-7 py-2">{text}</button>

  )
}

export default Button