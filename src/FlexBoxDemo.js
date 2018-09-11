import React, { Component } from "react";

const defaultStyles = {
  order: 0,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "auto",
  alignSelf: "auto"
};
export default class FlexBoxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3],
      itemWidth: 80
    };
  }
  componentWillMount() {
    this.setStyles();
  }
  setStyles = () => {
    let _styles = [];
    this.state.items.map(item => {
      _styles[item] = defaultStyles;
    });
    this.setState({ styles: _styles });
  };
  addChild = () => {
    let items = this.state.items;
    const newItem = items.length + 1;
    items.push(newItem);
    this.setState({ items });
    this.setStyles();
  };
  removeChild = () => {
    let items = this.state.items;
    items.pop();
    this.setState({ items });
    this.setStyles();
  };
  render() {
    const FlexBoxDemoStyle = { ...this.props.properties };
    return (
      <div className="FlexBoxDemo">
        <h3>演示结果</h3>
        <div className="FlexBoxDemo-operation">
          <div>
            <label>item数量: </label>
            <button onClick={this.addChild}>+</button>
            <span> {this.state.items.length} </span>
            <button onClick={this.removeChild}>-</button>
          </div>
          <div>
            <label>
              item宽度: <span id="itemWidth">{this.state.itemWidth}</span>px
            </label>
            <input
              id="widthRange"
              type="range"
              name="points"
              min="30"
              max="180"
              value={this.state.itemWidth}
              onChange={e => {
                this.setState({ itemWidth: `${e.target.value}` });
              }}
            />
          </div>
        </div>
        <div
          className="FlexBoxDemo-items"
          style={{
            flex: 1,
            backgroundColor: "#fed45b",
            padding: 8,
            ...FlexBoxDemoStyle
          }}
        >
          {this.state.items.map(item => {
            return (
              <div
                className="FlexBoxDemo-item"
                key={item}
                style={{
                  order: this.state.styles[item].order,
                  flexGrow: this.state.styles[item].flexGrow,
                  flexShrink: this.state.styles[item].flexShrink,
                  flexBasis: this.state.styles[item].flexBasis,
                  alignSelf: this.state.styles[item].alignSelf,
                  width: `${this.state.itemWidth}px`
                }}
              >
                <div className="FlexBoxDemo-item-num">{item}</div>
                <input
                  title="定义项目的排列顺序。数值越小，排列越靠前，默认为0"
                  placeholder="order"
                  type="text"
                  onChange={e => {
                    const styles = this.state.styles;
                    const newStyles = {
                      ...styles,
                      ...{ [item]: { order: e.target.value } }
                    };
                    this.setState({ styles: newStyles });
                  }}
                />
                <input
                  title="属性定义项目的放大比例，默认为0"
                  placeholder="flex-grow"
                  type="text"
                  onChange={e => {
                    const styles = this.state.styles;
                    const newStyles = {
                      ...styles,
                      ...{ [item]: { flexGrow: e.target.value } }
                    };
                    this.setState({ styles: newStyles });
                  }}
                />
                <input
                  title="属性定义了项目的缩小比例，默认为1"
                  placeholder="flex-shrink"
                  type="text"
                  onChange={e => {
                    const styles = this.state.styles;
                    const newStyles = {
                      ...styles,
                      ...{ [item]: { flexShrink: e.target.value } }
                    };
                    this.setState({ styles: newStyles });
                  }}
                />
                <input
                  title="属性定义了在分配多余空间之前，项目占据的主轴空间。"
                  placeholder="flex-basis"
                  type="text"
                  onChange={e => {
                    const styles = this.state.styles;
                    const newStyles = {
                      ...styles,
                      ...{ [item]: { flexBasis: e.target.value } }
                    };
                    this.setState({ styles: newStyles });
                  }}
                />
                <select
                  name="align-self"
                  title="align-self 允许不一样的对齐方式，可覆盖`align-items`属性"
                  onChange={e => {
                    const styles = this.state.styles;
                    const newStyles = {
                      ...styles,
                      ...{ [item]: { alignSelf: e.target.value } }
                    };
                    this.setState({ styles: newStyles });
                  }}
                >
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="space-between">space-around</option>
                  <option value="stretch">stretch</option>
                  <option selected="selected" value="auto">
                    auto
                  </option>
                </select>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


// .FlexBoxDemo {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   background-color: white;
// }
// .FlexBoxDemo-operation {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   margin: 16px;
// }

// .FlexBoxDemo-items {
//   flex: 1;
//   display: flex;
// }

// .FlexBoxDemo-item {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   margin: 8px;
//   padding: 8px;
//   border-radius: 6px;
//   background-color: white;
// }

// .FlexBoxDemo-item-num {
//   width: 20px;
//   height: 20px;
//   border-radius: 10px;
//   text-align: center;
//   background-color: #419bf9;
//   line-height: 20px;
//   align-self: center;
//   margin-bottom: 10px;
// }

