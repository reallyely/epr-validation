import * as React from "react";
import classnames from "classnames";
import cxs from "cxs";

export const style = {
  row: classnames([])
};

export interface Props extends React {
  cells: ChildNode[];
}
export default (props: Props) => (
  <div className={style["row"]}>{props.cells}</div>
);
