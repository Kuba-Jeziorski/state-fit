import { NavLink } from "react-router-dom"

export const NavigationPlaceholder = () => {
    return <div style={{display: "flex", gap: "10px"}}>
        <NavLink to="open">OPENING</NavLink>
        <NavLink to="home">HOME</NavLink>
        <NavLink to="summary">SUMMARY</NavLink>
    </div>
}