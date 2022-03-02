export const stylesTreeBeard = {
  tree: {
    base: {
      listStyle: "none",
      backgroundColor: "#d8dfe4",
      borderRadius: "20px",
      marginLeft: -40,
      padding: 10,
      color: "#666668",
      fontFamily: "lucida grande ,tahoma,verdana,arial,sans-serif",
      fontSize: "15px",
      margin: 6,
    },
    node: {
      base: {
        position: "relative",
        borderRadius: "20px",
      },
      link: {
        cursor: "pointer",
        position: "relative",
        padding: "1px 8px 1px",
        display: "block",
      },
      activeLink: {
        background: "#d8dfe4",
      },
      toggle: {
        base: {
          position: "relative",
          display: "inline-block",
          verticalAlign: "top",
          marginLeft: "-5px",
          height: "24px",
          width: "24px",
        },
        wrapper: {
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-7px 0 0 -7px",
          height: "14px",
        },
        height: 14,
        width: 14,
        arrow: {
          fill: "#9DA5AB",
          strokeWidth: 0,
        },
      },
      header: {
        base: {
          display: "inline-block",
          verticalAlign: "top",
          color: "#9DA5AB",
        },
        connector: {
          width: "2px",
          height: "12px",
          borderLeft: "solid 2px black",
          borderBottom: "solid 2px black",
          position: "absolute",
          top: "0px",
          left: "-21px",
        },
        title: {
          lineHeight: "24px",
          verticalAlign: "middle",
        },
      },
      subtree: {
        listStyle: "none",
        paddingLeft: "19px",
      },
      loading: {
        color: "#E2C089",
      },
    },
  },
};
