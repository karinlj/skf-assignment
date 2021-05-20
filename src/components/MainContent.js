import { useState, useEffect } from "react";

const MainContent = () => {
  // const [current, setCurrent] = useState(0);

  const data = [
    {
      name: "About",
      children: [
        { name: "About_sub1", children: [{ name: "About_sub_sub1" }] },
        { name: "About_sub2" },
      ],
    },
    {
      name: "Contact",
      children: [{ name: "Contact_sub1" }, { name: "Contact_sub2" }],
    },
    {
      name: "Profile",
      children: [{ name: "Profile_sub1" }, { name: "Profile_sub2" }],
    },
  ];
  const openLink = (e) => {
    e.currentTarget.classList.toggle("open");
    e.stopPropagation();
  };

  const openNode = () => {
    console.log("openNode");
  };

  const displayName = (name) => {
    console.log("displayName", name);
  };

  const buildNode = (item) => {
    // console.log("item.children", item.children);
    if (item.children) {
      return (
        <div className="node">
          <span onClick={(e) => openLink(e)}>{item.name}</span>
          <br />
          {item.children.map((subitem) => {
            return buildNode(subitem);
          })}
        </div>
      );
    } else {
      //console.log("item.name", item.name);
      return (
        <div className="leaf">
          <span className="main_link" onClick={() => displayName(item.name)}>
            {item.name}
          </span>
          <br />
        </div>
      );
    }
  };

  //   useEffect(() => {
  //     //console.log("current", current);
  //   }, [current]);

  return (
    <section className="main_content">
      <aside className="sidebar">
        <nav className="nav">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="link_wrapper"
                //onClick={(e) => e.currentTarget.classList.toggle("open")}
              >
                {buildNode(item)}
              </div>
            );
          })}
        </nav>
      </aside>

      <article className="content">
        hej
        {/* {data &&
          data.map((item, i) => {
            return (
              <div key={i} className="item_content">
                <h2>{item.name}</h2>
              </div>
            );
          })} */}
      </article>

      {/* <article className="content">
        <h3 id="one">Some node 1</h3>
        <h3 id="two">Some node 2</h3>
        <h3 id="three">Some node 3</h3>
      </article> */}
    </section>
  );
};
export default MainContent;
