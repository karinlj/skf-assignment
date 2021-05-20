import { useState, useEffect } from "react";

const MainContent = () => {
  const [current, setCurrent] = useState(0);
  // const nodes{
  //   "data":[
  //      {
  //         "name":"Some node 1",
  //         "children":[
  //            {
  //               "name":"Some node 1.1",
  //               "children":[
  //                  {
  //                     "name":"Some node 1.1.1"
  //                  }
  //               ]
  //            },
  //            {
  //               "name":"Some node 1.2"
  //            },
  //            {
  //               "name":"Some node 1.3",
  //               "children":[
  //                  {
  //                     "name":"Some node 1.3.1"
  //                  }
  //               ]
  //            },
  //            {
  //               "name":"Some node 1.4"
  //            }
  //         ]
  //      },
  //      {
  //         "name":"Some node 2"
  //      }

  const data = [
    {
      name: "About",
      children: [{ name: "About_sub1" }, { name: "About_sub2" }],
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
  const openSublink = (e, j) => {
    console.log("subindex", j);
    e.stopPropagation();
    //setCurrent(j);
  };

  const buildNode = (item, i) => {
    if (item.children) {
      return buildNode(item.children);
    } else {
    }
    return (
      <div>
        <span
          // className={`main_link ${current === i ? "active" : ""}`}
          className="main_link"
          onClick={() => setCurrent(i)}
        >
          {item.name}
        </span>
        <ul className="sublinks">
          {item.children.map((item, j) => {
            return (
              <li
                key={j}
                onClick={(e) => {
                  openSublink(e, j);
                }}
                // className={`sub_link ${current === j ? "active" : ""}`}
                className="sub_link"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    console.log("current", current);
  }, [current]);

  return (
    <section className="main_content">
      <aside className="sidebar">
        <nav className="nav">
          <ul>
            {data.map((item, i) => {
              return (
                <li
                  key={i}
                  className="link_wrapper"
                  onClick={(e) => e.currentTarget.classList.toggle("open")}
                >
                  {buildNode(item)}
                </li>
              );
              // return (
              //   <li
              //     key={i}
              //     className="link_wrapper"
              //     onClick={(e) => e.currentTarget.classList.toggle("open")}
              //   >
              //     <span
              //       className={`main_link ${current === i ? "active" : ""}`}
              //       onClick={() => setCurrent(i)}
              //     >
              //       {item.name}
              //     </span>
              //     <ul className="sublinks">
              //       {item.children.map((item, j) => {
              //         return (
              //           <li
              //             key={j}
              //             onClick={(e) => {
              //               openSublink(e, j);
              //             }}
              //             className={`sub_link ${
              //               current === j ? "active" : ""
              //             }`}
              //           >
              //             {item.name}
              //           </li>
              //         );
              //       })}
              //     </ul>
              //   </li>
              // );
            })}
          </ul>
        </nav>
      </aside>

      <article className="content">
        {data &&
          data.map((item, i) => {
            return (
              <div
                key={i}
                className={`item_content  ${current === i ? "active" : ""}`}
              >
                <h2>{item.name}</h2>
              </div>
            );
          })}
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
