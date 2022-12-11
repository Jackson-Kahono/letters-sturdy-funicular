import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="items">
        <div>
          <Link to="/home">Public letters</Link>
        </div>
        <div>
          <Link to="/week">From this week</Link>
        </div>
        <div>
          <Link to="/month">From this month</Link>
        </div>
        <div>
          <Link to="/personal">Personal</Link>
        </div>
        <div>
          <Link to="/create">Create</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
