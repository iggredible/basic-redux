import React from "react";
import {connect} from "react-redux";
import {addNote, deleteNote} from "./javascripts/actions/index.js";

const mapStateToProps = state => {
  return {
    notes: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: note => dispatch(addNote(note)),
    deleteNote: note => dispatch(deleteNote(note))
  }
}

class ConnectedApp extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      title: ''
    }
  }

  handleChange(e){
    this.setState({title: e.target.value})
  }

  handleSubmit(e) {
    const {addNote} = this.props;
    const {title} = this.state;
    e.preventDefault();
    addNote({title})
    this.setState({title: ''})
  }

  handleDelete(id) {
    const {deleteNote} = this.props;
    deleteNote(id);
  }
  render() {
    const { notes } = this.props;
    const {title} = this.state;
    return (
    <div>
      <div>
        <h2>Notes</h2>

        {notes.map((note, index) => {
          return <li key={note.id}>{note.title} ({note.id}) <button onClick={() => this.handleDelete(note.id)}>Delete</button></li>
        })}

      </div>
      <div>
        <h2>Add a new note</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={title} onChange={this.handleChange}/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
    )
  }
}

// connects App to redux
const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

export default App;

