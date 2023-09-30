import { Component } from "react";
import PostCodeHeaders from "../PostCodeHeaders";
import PostCode from "../PostCode";
import UpdateCode from "../UpdateCode";
import DeleteCode from "../DeleteCode";
import { v4 } from "uuid";
import "./index.css";

const postCodeHeadersList = [
  {
    id: v4(),
    headerName: "Post",
  },
  {
    id: v4(),
    headerName: "Update",
  },
  {
    id: v4(),
    headerName: "Delete",
  },
];

class ManupulateDataCard extends Component {
  state = {
    activeTabId: postCodeHeadersList[0].id,
  };

  onClickChangeTabId = (currentTabId) => {
    this.setState({ activeTabId: currentTabId });
  };

  renderBody = () => {
    const { activeTabId } = this.state;
    switch (activeTabId) {
      case postCodeHeadersList[0].id:
        return <PostCode />;
      case postCodeHeadersList[1].id:
        return <UpdateCode />;
      case postCodeHeadersList[2].id:
        return <DeleteCode />;
      default:
        return null;
    }
  };

  render() {
    const { activeTabId } = this.state;
    return (
      <div className="admin-container">
        <div className="admin-card">
          <div className="admin-scroller">
            <div>
              {postCodeHeadersList.map((each) => (
                <PostCodeHeaders
                  key={each.id}
                  postCodeHeadersData={each}
                  isActive={each.id === activeTabId}
                  onClickChangeTabId={this.onClickChangeTabId}
                />
              ))}
              <hr />
              {this.renderBody()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManupulateDataCard;
