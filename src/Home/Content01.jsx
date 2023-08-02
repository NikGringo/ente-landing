import React from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";
import { Modal } from "antd";

class Content extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { image: undefined };
  }
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;

    const onClick = (src) => {
      this.setState({
        image: src,
      });
    };
    const onOk = (src) => {
      this.setState({
        image: undefined,
      });
    };
    const onCancel = (src) => {
      this.setState({
        image: undefined,
      });
    };

    const Mod = () => {
      return (
        <Modal
          // title="Basic Modal"
          open={this.state.image}
          onOk={onOk}
          onCancel={onCancel}
        >
          <img src={this.state.image} width="100%" alt="img" />
        </Modal>
      );
    };

    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          {/* <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div> */}
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                const { src } = item.children[0].children.props;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <div {...item} onClick={() => onClick(src)} style={{ height: '200px'}}>
                      {item.children.map(getChildrenToRender)}
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
          <Mod />
        </div>
      </div>
    );
  }
}

export default Content;
