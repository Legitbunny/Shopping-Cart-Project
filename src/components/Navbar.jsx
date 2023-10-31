import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <NavLink to = "/">
          <div>
          <img src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-platform.99static.com%2F%2F2L_tfTrztwu_M4-NbItiNjiRE3g%3D%2F49x47%3A779x777%2Ffit-in%2F500x500%2F99designs-contests-attachments%2F145%2F145482%2Fattachment_145482488&tbnid=WC8dt3Trw4_z_M&vet=12ahUKEwj8np36lZuCAxVx3DgGHcjRCeEQMygZegUIARCuAQ..i&imgrefurl=https%3A%2F%2F99designs.com%2Finspiration%2Flogos%2Fshopping-cart&docid=nx3UnuC6YWPLWM&w=500&h=500&q=shopping%20platform%20logo&ved=2ahUKEwj8np36lZuCAxVx3DgGHcjRCeEQMygZegUIARCuAQ"/>
          </div>
        </NavLink>

          <div>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div>
              <FaShoppingCart/>
              </div>
            </NavLink>  
          </div>
      </div>
    </div>
  );
};

export default Navbar;
