// import DynamicBadge component
import DynamicBadge from "./DynamicBadge"

const ASIDE_MENU = [
  {
    title: "Dashboard",
    
    // Add dynamic badge to addon property
    addon: () => <DynamicBadge />,
    link: "/"
  }
]

export default ASIDE_MENU
