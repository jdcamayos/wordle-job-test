import StatsIcon from "./StatsIcon";

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function StatsButton(props: Props) {
  return (
    <button {...props}>
      <StatsIcon />
    </button>
  )
}
