import React from "react";
import { Actions } from "../../../utils/Categories";
import DeleteFilmPopup from "../deleteFilmPopup/deleteFilmPopup";
import EditFilmPopup from "../editFilmPopup/editFilmPopup";
import AddFilmPopup from "../addFilmPopup/addFilmPopup";
import Modal from "../modal/Modal";
import * as PropTypes from "prop-types";
import Popup from "../popup/Popup";

class PopoutManager extends React.Component {
  constructor(props) {
    super(props);
  }


  onClick = () => {
    this.props.closePopup();
  };

  onConfirm = (data) => {
    this.props.closePopup();
  };

  // showPopup = () => {
  //   return (
  //     <Popup>
  //       <DeleteFilmPopup close={this.onClick} />
  //     </Popup>
  //   );
  // };

  render() {
    return (
      <div>
        <Modal>
          {/*{this.props.popup === Actions.deleteFilm && this.showPopup()}*/}
          {this.props.popup === Actions.deleteFilm && (
            <DeleteFilmPopup
              close={this.onClick}
              confirmPopup={this.props.confirmPopup}
              popup={this.props.popup}
              data={this.props.data}
            />
          )}
          {this.props.popup === Actions.editFilm && (
            <EditFilmPopup  close={this.onClick}
                            confirmPopup={this.props.confirmPopup}
                            popup={this.props.popup}
                            data={this.props.data}/>
          )}
          {this.props.popup === Actions.addFilm && (
            <AddFilmPopup  close={this.onClick}
                           confirmPopup={this.props.confirmPopup}
                           popup={this.props.popup}
                           data={this.props.data} />
          )}
        </Modal>
      </div>
    );
  }
}

PopoutManager.propTypes = {
  popup: PropTypes.string.required,
};

export default PopoutManager;
