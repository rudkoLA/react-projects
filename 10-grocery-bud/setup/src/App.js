import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";

const MSG_TYPE_DANGER = "danger";
const MSG_TYPE_SUCCESS = "success";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({
        show: true,
        msg: "please enter a name",
        type: MSG_TYPE_DANGER,
      });
    } else if (name && isEditing) {
      const itemIndex = list.findIndex((item) => item.id === editId);
      const newList = [...list];
      newList[itemIndex] = { id: editId, title: name };
      setList(newList);
      setIsEditing(false);
      setEditId(null);
      setName("");
      showAlert(true, MSG_TYPE_SUCCESS, "edited item");
    } else {
      showAlert(true, MSG_TYPE_SUCCESS, "item added to the list");
      const newItem = {
        id: "grocery_itm_" + new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, MSG_TYPE_DANGER, "cleared all items");
  };

  const removeItem = (id) => {
    if (isEditing && id === editId) {
      setIsEditing(false);
      setEditId(null);
      setName("");
    }
    showAlert(true, MSG_TYPE_DANGER, "cleared item");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(item.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
