class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      
      //add handle
      
    }
    
    // add handleChange here
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    // add handleSubmit here
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" value={this.state.value}
             onChange={this.handleChange} />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );