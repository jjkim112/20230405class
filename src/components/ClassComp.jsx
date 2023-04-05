import { Component } from "react";

class ClassComp extends Component {
  state = {
    count: 0,
  };

  // setCount(num) {
  //   this.setState({
  //     count: num,
  //   });
  // }

  render() {
    return (
      <div>
        {this.state.count}
        <button
          className="bg-purple-300 px-4 py-2 rounded-md"
          onClick={() => {
            this.setState((preState) => ({ count: preState.count + 1 }));
            // onClick={() => this.setCount(this.state.count + 1)}
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default ClassComp;
