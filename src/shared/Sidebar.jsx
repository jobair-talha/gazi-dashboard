import { Link, NavLink } from "react-router-dom";
import "../assets/sass/_sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar pl-2 bg-white text-black">
      <div className="account mt-3">
        <div className="flex my-2">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white mr-2"
            src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1631023655pexels-moose-photos-1036627.jpg"
            alt="avatar"
          />
          <div>
            <span>Admin</span>
            <br />
            <span>Administrator</span>
          </div>
        </div>
        <hr />
        <ul>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li class="menu-item sub-menu">
            <NavLink to={"/"}>
              <span class="menu-icon">
                <i class="ri-bar-chart-2-fill"></i>
              </span>
              <span class="menu-title">Charts</span>
            </NavLink>
            <div class="sub-menu-list">
              <ul>
                <li class="menu-item">
                  <a href="#">
                    <span class="menu-title">Pie chart</span>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="#">
                    <span class="menu-title">Line chart</span>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="#">
                    <span class="menu-title">Bar chart</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item sub-menu">
            <a href="#">
              <span class="menu-icon">
                <i class="ri-bar-chart-2-fill"></i>
              </span>
              <span class="menu-title">Charts</span>
            </a>
            <div class="sub-menu-list">
              <ul>
                <li class="menu-item">
                  <a href="#">
                    <span class="menu-title">Pie chart</span>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="#">
                    <span class="menu-title">Line chart</span>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="#">
                    <span class="menu-title">Bar chart</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
