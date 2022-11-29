import React from "react";
import { zoomIn, zoomOut } from "react-animations";
import { StyleSheet, css } from "aphrodite";
export default function PortfolioCard(props) {
  const { title, des, img, url, tab } = props.portfolio;
  const { tabPane } = props;
  const styles = StyleSheet.create({
    zoomIn: {
      animationName: zoomIn,
      animationDuration: "1s",
    },
    zoomOut: {
      animationName: zoomOut,
      animationDuration: "1s",
      animationFillMode: "forwards",
    },

    zoomInCustom: {
      animationName: {
        "0%": {
          transform: "scale(0,0)",
          opacity: "0",
          width: "0",
          padding: "0",
        },
        "50%": {
          transform: "scale(0.5,0.5)",
          opacity: "0.5",
        },
        "100%": {
          transform: "scale(1,1)",
          opacity: "1",
          width: "calc(100/3)",
          paddingRight: "2rem",
        },
      },
      animationDuration: "0.5s",
      animationIterationCount: "1",
      animationTimingFunction: "linear",
      animationFillMode: "forwards",
    },
    zoomOutCustom: {
      animationName: {
        "0%": {
          transform: "scale(1,1)",
          opacity: "1",
          width: "calc(100/3)",
        },
        "50%": {
          transform: "scale(0.5,0.5)",
          opacity: "0.5",
        },
        "100%": {
          transform: "scale(0,0)",
          opacity: "0",
          width: "0",
          padding: "0",
        },
      },
      animationDuration: "0.4s",
      animationIterationCount: "1",
      animationTimingFunction: "linear",
      animationFillMode: "forwards",
    },
  });
  const handleStyle = () => {
    if (tabPane === "") {
      return "";
    }
    if (tabPane === "all-tab-pane") {
      return `${css(styles.zoomInCustom)}`;
    }
    if (tabPane === tab) {
      return `${css(styles.zoomInCustom)}`;
    }
    return `${css(styles.zoomOutCustom)}`;
  };
  return (
    <div className={`${handleStyle()} .${tab} col-4`}>
      <a href={url} target={"_blank"}>
        <div className="card">
          <img src={img} alt="" className="card-img-top" />
          <div className="card-body">
            <h5>{title}</h5>
            <p>{des}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
