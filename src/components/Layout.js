import "../mystyle.css";
import React from "react";
import { BsFillBackspaceReverseFill, BsFillCursorFill } from "react-icons/bs";
const Layout = ({ allValueGet, setvalue, s_value, h_value, textvalue }) => {
  const delete_item = (id) => {
    const updated = allValueGet.filter((elem, index) => {
      return index !== id;
    });
    setvalue(updated);
  };
  const edit_item = (id1) => {
    const change_value = allValueGet.filter((elem, index) => {
      return index === id1;
    });
    s_value(change_value);
    setvalue(
      allValueGet.map((elem, index) => {
        if (index === id1) {
          console.log({ ...setvalue, s_value });
        }
      })
    );
  };

  const remove_all = () => {
    setvalue([]);
  };

  return (
    <div>
      {allValueGet.map((item, index) => {
        return (
          <>
            <ul className="items_color">
              <div className="float_items">
                <div className="input_hello">
                  <li className="list_style_input" key={index}>
                    {item}
                  </li>
                </div>
                <div className="items_icon">
                  <span
                    className="icon_first"
                    onClick={() => {
                      delete_item(index);
                    }}
                  >
                    <BsFillBackspaceReverseFill />
                  </span>
                  <span
                    onClick={() => {
                      edit_item(index);
                    }}
                  >
                    <BsFillCursorFill />
                  </span>
                </div>
              </div>
            </ul>
          </>
        );
      })}
      <button onClick={remove_all}>Remove All</button>
    </div>
  );
};
export default Layout;
