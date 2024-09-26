import { NavLink } from "react-router-dom";

export const Navigation = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <NavLink to="open">OPENING</NavLink>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="summary">SUMMARY</NavLink>
    </div>
  );
};
