import HelpIcon from "./HelpIcon"

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function HelpButton(props: Props) {
  return (
    <button {...props}>
      <HelpIcon />
    </button>
  )
}
