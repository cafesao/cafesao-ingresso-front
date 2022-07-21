export default function Box(props: { color: string }) {
  return (
    <svg width="10" height="10">
      <rect width="10" height="10" fill={props.color} />
    </svg>
  )
}
