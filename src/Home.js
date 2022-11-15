import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",  
       password_1: "",
    conform_pass_1: "",
       navigate: "",
    };
  }


  AddDetail = () => {
    axios
      .post("http://localhost:5001/sign_in", {
        username: this.state.name,
        email: this.state.email,
        password: this.state.password,
      
      })
      .then((res) => {
        console.log("res:", res);
      })
      .catch((err) => {
        console.log("err:", err);
      });
    console.log(this.state.password);
  };

    CheckDetail = () => {
      axios.post("http://localhost:5001/conform", {
        password_1: this.state.password_1,
        conform_pass: this.state.conform_pass_1,
      }).then((res) => {
        if (res.data.results.length > 0 && res.data.message === "success") {
          console.log("ok");
          this.setState({
            // navigate: <Navigate to="/Welcome"></Navigate>,
          });
          localStorage.setItem("Done", "Success");
        } else {
          alert("Wrong password");
        }
      });
    };

 

  render() {
    if (localStorage.getItem("Done") !== null) {
      // return <Navigate to="/Welcome" />;
    }
    console.log("name", this.state.name);
    console.log("email", this.state.email);
    console.log("password", this.state.password);
    console.log("password_1", this.state.password_1);
    console.log("conform_pass_1", this.state.conform_pass_1);
    // console.log("password_1", this.state.password_1);
    // console.log("last_login", this.state.last_login);
    return (
      <div>
        <br />
        <div>LOG - In</div>
        <br />
        <div>
          <label>NAME : </label>
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                name: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label>EMAIL : </label>
          <input
            type="password"
            onChange={(e) => {
              this.setState({
                email: e.target.value,
              });
            }}
          />
        </div>
       
        <div>
          <label>PASSWORD : </label>
          <input
            type="password"
            onChange={(e) => {
              this.setState({
                password: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <button onClick={this.AddDetail}>CLICK</button>
        </div>


        <br />
        <div>SIGN - In</div>
        <br />

        <div>
          {this.state.navigate}
          <label>PASSWORD : </label>
          <input
            type="password"
            onChange={(e) => {
              this.setState({
                password_1: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>CONFORM PASSWORD : </label>
          <input
            type="password"
            onChange={(e) => {
              this.setState({
                conform_pass_1: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <button onClick={this.CheckDetail}>CLICK</button>
        </div>
      </div>
    );
  }
}
