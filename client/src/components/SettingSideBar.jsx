import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
export default function SettingSideBar() {
  return (
    <div className="h-full flex items-center justify-center absolute left-0 top-0 bottom-0">
      <Sidebar>
        <Menu>
          <SubMenu label="Settings">
            <Link to="/">
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to="/orders">
            <MenuItem >Place order</MenuItem>
            </Link>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

