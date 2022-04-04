import * as React from "react";

export const WithCard = (Wrapper) => {
  //   return () => (
  //     <div
  //       style={{
  //         boxShadow:
  //           "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  //       }}
  //     >
  //       <Wrapper />
  //     </div>
  //   );
  return class A extends React.Component {
    render() {
      return (
        <div
          style={{
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          }}
        >
          <Wrapper />
        </div>
      );
    }
  };
};
