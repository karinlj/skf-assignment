import { useState, useEffect } from "react";
//import TreeData from "../data/treeData.json";

const MainContent = () => {
  const [treeData, setTreeData] = useState(null);
  const [current, setCurrent] = useState("");
  const [oldSelected, setOldSelected] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const treeDataUrl = "http://localhost:9000/data/";

  const getData = async (url) => {
    try {
      const result = await fetch(url);
      if (!result.ok) {
        console.log("result:", result);
        throw Error("Fetch data error: " + result.statusText);
      }
      const data = await result.json();
      return data;
    } catch (err) {
      console.log("error:", err);
    }
  };
  useEffect(() => {
    const getTreeData = async () => {
      const dataFromServer = await getData(treeDataUrl);
      //   console.log("dataFromServer", dataFromServer);
      //   console.log("treeDataUrl:", treeDataUrl);
      setTreeData(dataFromServer);
      setIsLoading(false);
      if (dataFromServer) {
        setError(null);
      } else {
        setError("Ooops!! Could not fetch data...");
      }
    };
    getTreeData();
  }, []);

  const openLink = (e, name) => {
    e.currentTarget.classList.toggle("open");
    setCurrent(name);
  };

  const displayName = (e, name) => {
    if (oldSelected) {
      oldSelected.classList.remove("selected");
    }
    setCurrent(name);
    e.currentTarget.classList.add("selected");
    setOldSelected(e.currentTarget);
  };

  const buildNode = (item) => {
    if (item.children) {
      return (
        <div className="node">
          <span
            className="node_link"
            onClick={(e) => {
              openLink(e, item.name);
            }}
          >
            {item.name}
          </span>

          {item.children.map((subitem) => {
            return buildNode(subitem);
          })}
        </div>
      );
    } else {
      return (
        <div className="leaf">
          <span
            className="leaf_link"
            onClick={(e) => displayName(e, item.name)}
          >
            {item.name}
          </span>
        </div>
      );
    }
  };

  return (
    <section className="main_content">
      <aside className="sidebar">
        <nav className="nav">
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {treeData &&
            treeData.map((item, i) => {
              return (
                <div key={i} className="link_wrapper">
                  {buildNode(item)}
                </div>
              );
            })}
        </nav>
      </aside>

      <article className="content">
        <h2>{current}</h2>
      </article>
    </section>
  );
};
export default MainContent;
