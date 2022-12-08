import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="items">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/gh">Public letters</Link>
        </div>
        <div>
          <Link to="/gh">From this week</Link>
        </div>
        <div>
          <Link to="/gh">From this month</Link>
        </div>
        <div>
          <Link to="/gh">Personal</Link>
        </div>
        <div>
          <Link to="/create">Create</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
