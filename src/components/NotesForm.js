import React, { Component } from 'react';

class NotesForm extends Component {
  state = {}
  render() {
    const {
      newNoteData,
      onNotesFormInputChange,
      createNewNote,
      setNotesFormVisibility,
    } = this.props
    return (
      <div className="form-cont">
        <div className="form">
          <input
            className="form-input"
            name="title"
            placeholder="Title"
            value={newNoteData.title}
            onChange={(e) => onNotesFormInputChange(e)}
            maxLength="20"
          />
          <input
            className="form-input"
            name="desc"
            placeholder="Description"
            value={newNoteData.desc}
            onChange={(e) => onNotesFormInputChange(e)}
          />
          
          <button
            onClick={() => setNotesFormVisibility(false)}
            className="btn cancel-btn btn-long mb2"
          >
            Cancel
          </button>
          <button className="btn btn-long mb2" onClick={createNewNote}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default NotesForm;