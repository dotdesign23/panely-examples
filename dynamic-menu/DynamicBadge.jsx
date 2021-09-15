import React from "react"
import { Badge } from "@blueupcode/components"
import { connect } from "react-redux"

// Main component
function DynamicBadge(props) {
  return <Badge>{props.theme}</Badge>
}

// Function to get data from Redux State
function mapStateToProps(state) {
  return state.page
}

// Connect the element to Redux state
export default connect(mapStateToProps)(DynamicBadge)
