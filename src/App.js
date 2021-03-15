import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form/Form'
import Main from './components/Main/Main'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        isLog: false,
        surname: '',
        name: '',
        patronymic: '',
        identif: '',
        doc_series: '',
        doc_num: '',
        items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    

    this.setState({[name]: value});
  }
  
  handleClick() {
    this.setState({isLog: true});
    console.log(this.state.isLog)
  }

  handleSubmit(event) {
    this.setState({isLoggedIn: true});

    let url = `https://a.todes.by:13555/data-service-test/api/v1/data?sys_organ=26&identif=${this.state.identif}&surname%20=${this.state.surname}&name=${this.state.name}&patronymic=${this.state.patronymic}&doc_series=${this.state.doc_series}&doc_num=${this.state.doc_num}`

    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                items: result
            });
        },
        (error) => {
            this.setState({
                error
            });
        }
      )
    event.preventDefault(); 
    console.log(this.state.isLog);
  }

  render () {

    return (
      <div className="App">
        <Form 
          surname={this.state.surname}
          name={this.state.name}
          patronymic={this.state.patronymic}
          identif={this.state.identif}
          doc_series={this.state.doc_series}
          doc_num={this.state.doc_num}
          items={this.state.items}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        />
        <Main 
          isLog={this.state.isLog}
          items={this.state.items} 
        />
      </div>
    );
  }
}

export default App;
