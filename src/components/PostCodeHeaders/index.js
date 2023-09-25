import "./index.css";

const PostCodeHeaders = (props) => {
  const { postCodeHeadersData, isActive, onClickChangeTabId } = props;
  const changeTab = () => {
    onClickChangeTabId(postCodeHeadersData.id);
  };
  const activeTabClass = isActive && "active-tab";

  return (
    <button className={`pc-header-btn ${activeTabClass}`} onClick={changeTab}>
      {postCodeHeadersData.headerName}
    </button>
  );
};

export default PostCodeHeaders;
