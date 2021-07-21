import React, { Component } from "react";
import styled from "styled-components";
import { Portal, absolute } from "../Utils";
import Icon from "./Icon";
import { Card } from "./Cards";

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              {children}
            </ModalCard>
            {/* the onClick on background enables the card to be closed when 
            clicking off of the card */}
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

// css styling via styled components!
const ModalWrapper = styled.div`
  ${absolute({})};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 150px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  ${absolute({
    y: "top",
    x: "right",
  })};
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.3;
`;
