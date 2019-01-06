import * as React from "react";
import classnames from "classnames";

export const style = props => ({
  cell: classnames(["is-expanded"]),
  cell__header: classnames(["label"]),
  cell__input: classnames(["control"])
});

export interface Props {
  label: string;
  input: Element;
  rules: Array<string, Function>;
}
export default class Cell extends React.Component {
  props: Props;
  state: any;
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  setText = value => {
    this.setState({ value });
  };
  render() {
    const props = this.props;
    const boundStyle = style(props);
    return (
      <div className={boundStyle["cell"]}>
        <div className="field">
          <label className={boundStyle["cell__header"]}>{props.label}</label>
          <div
            className={boundStyle["cell__input"]}
            onInput={({ target }: any) => this.setText(target.value)}
          >
            <props.input />
          </div>
          <ul>
            {props.rules &&
              props.rules.map(([text, validation]) => (
                <li
                  className={`help ${
                    validation && validation(this.state.value)
                      ? "is-success"
                      : "is-danger"
                  }`}
                >
                  {text}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
