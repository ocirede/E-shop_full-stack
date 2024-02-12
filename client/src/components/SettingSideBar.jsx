import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
export default function SettingPage() {
    return(
        <>
    <div className=" h-full flex  items-center ">
    <Sidebar   style={{ width: "250px" }}>
      <Menu>
        <SubMenu label="Settings">
          <Link to="/profileform">
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem>Payment settings</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
    </div>
    <div className="flex-1 flex justify-center items-center">
      {/* Your profile content goes here */}
      <div>{/* Profile content */}</div>
    </div>
    </>
    )
}
