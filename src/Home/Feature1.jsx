import React, { useState } from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Row, Col, Modal } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

function Content1(props) {
  const [imageRes, setImageRes] = useState(undefined);
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? "bottom" : "right",
    one: isMobile
      ? {
          // scaleY: '+=0.3',
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        }
      : {
          x: "-=30",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        },
  };
  const handleOk = () => {
    setImageRes(undefined);
  };
  const handleCancel = () => {
    setImageRes(undefined);
  };

  const Mod = () => {
    return (
      <Modal
        // title="Basic Modal"
        open={imageRes}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img src={imageRes} width="100%" alt="img" />
      </Modal>
    );
  };

  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        <TweenOne
          key="img"
          animation={animType.one}
          style={{backgroundColor: 'green'}}
          resetStyle
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{
            md: dataSource.imgWrapper.md,
            xs: dataSource.imgWrapper.xs,
          }}
        >
          <span style={{ 
            scale: "0.8", 
            display: "flex", 
            justifyContent: 'center' 
            }}>
            {dataSource.img.children.map((ige) => (
              <img
                src={ige}
                width="100%"
                alt="img"
                onClick={() => setImageRes(ige)}
              />
            ))}
          </span>
        </TweenOne>
        <QueueAnim
          key="text"
          type={animType.queue}
          style={{backgroundColor: 'brown', width: '100%'}}
          leaveReverse
          ease={["easeOutQuad", "easeInQuad"]}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content} >
            {dataSource.content.children}
          </div>
        </QueueAnim>
      </OverPack>
      <Mod />
    </div>
  );
}

export default Content1;
