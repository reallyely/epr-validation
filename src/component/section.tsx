import * as React from "react";
import classnames from "classnames";
import Cell, * as cell from "./cell.tsx";
import Row, * as row from "./row.tsx";

export const style = {
  section: classnames([""]),
  section__header: classnames([]),
  section__row: classnames([]),
  section__cell: classnames([]),
  "section__cell-title": classnames([]),
  "section__cell-input": classnames([]),
  "section__cell--is-invalid": classnames([])
};

export interface Props {
  headerText: string;
  contents: Array<cell.props>;
}
export default (props: Props) => (
  <section className={style["section"]}>
    <h1 className={style["section__header"]}>{props.headerText}</h1>
    {props.contents.map(row => (
      <Row
        key={row.label}
        cells={row.map(props => (
          <Cell key={props.label} {...props} />
        ))}
      />
    ))}
  </section>
);
