import "./index.css";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";

const ContentBody = (props) => {
  const { resizeMenuBar, searchInput } = props;
  return (
    <div className="content-body">
      <Sidebar resizeMenuBar={resizeMenuBar} />
      <MainContent searchInput={searchInput} />
    </div>
  );
};

export default ContentBody;
