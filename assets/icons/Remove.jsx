import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const RemoveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    color={props.color}
    fill="none"
    {...props}
  >
    <Path
      d="M16 12H8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
  </Svg>
)

export default RemoveIcon
