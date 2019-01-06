import * as React from "react";
import Section from "./component/section";

const fields = [
  [
    {
      label: "1. NAME (Last, First, Middle Initial)",
      rules: [
        [
          "Name must have two commas separated by a space",
          value => {
            const match = value.match(/, /g);
            return match && match.length === 2;
          }
        ],
        [
          "Last item must be a Middle initial, not middle name",
          value => {
            const names = value.split(",");
            return names[2] && names[2].trim().length === 1;
          }
        ],
        [
          "Name should be in all caps",
          value => {
            const upperValue = value.toUpperCase();
            return value.trim().length > 0 && upperValue === value;
          }
        ]
      ],
      input: () => <input className="input" type="text" />
    },
    {
      label: "2. SSN",
      rules: [
        [
          "Must be in the form 123-45-6789",
          value => {
            return value.match(/\d{3}-\d{2}-\d{4}/);
          }
        ]
      ],
      input: () => <input className="input" type="text" />
    },
    {
      label: "3. Rank",
      rules: [
        [
          "Must have a value selected",
          value => {
            return value;
          }
        ]
      ],
      input: () => (
        <div className="select">
          <select>
            <option />
            <option>AB</option>
            <option>Amn</option>
            <option>A1C</option>
            <option>SrA</option>
            <option>SSgt Select</option>
            <option>SSgt</option>
            <option>TSgt Select</option>
            <option>Tsgt</option>
          </select>
        </div>
      )
    },
    {
      label: "4. DAFSC",
      rules: [
        [
          "Should have at least 5 alphanumeric characters",
          value => {
            const match = value.match(/\w{5,}/);
            return match;
          }
        ]
      ],
      input: () => <input className="input" type="text" />
    }
  ],
  [
    {
      label: "5. Organization, Command, and Location",
      rules: [
        [
          "Should be on two lines",
          value => {
            const lines = value.split("\r\n|\r|\n");
            return lines && lines.length === 2;
          }
        ]
      ],
      input: () => <textarea className="textarea" />
    },
    {
      label: "6. PAS Code",
      input: () => <input className="input" type="text" />
    },
    {
      label: "7. FDID",
      input: () => <input className="input" type="text" />
    }
  ],
  [
    {
      label: "8. PERIOD OF REPORT (DD Mmm YYYY) From",
      input: () => <input className="input" type="text" />
    },
    {
      label: "8. PERIOD OF REPORT (DD Mmm YYYY) Thru",
      input: () => <input className="input" type="text" />
    },
    {
      label: "9. NO. DAYS NON-RATED",
      input: () => <input className="input" type="text" />
    },
    {
      label: "10. NO. DAYS SUPERVISION",
      validation: value => {
        console.log(value);
      },
      input: () => <input className="input" type="text" />
    },
    {
      label: "11. REASON FOR REPORT",
      validation: value => {
        console.log(value);
        return true;
      },
      input: () => <input className="input" type="text" />
    }
  ]
];

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section
        headerText="I. RATEE IDENTIFICATION DATA (Refer to AFI 36-2406 for instructions on completing this form)"
        contents={fields}
      />
    );
  }
}
