import React, { ReactNode } from "react";
import { Container, Row, Col, IGridContainerProps, IGridRowProps, IGridColProps } from "react-awesome-styled-grid";

interface GridContainerProps extends IGridContainerProps {
  children: ReactNode;
}

interface GridRowProps extends IGridRowProps {
  children: ReactNode;
}

interface GridColProps extends IGridColProps {
  children: ReactNode;
}

export const GridContainer: React.FC<GridContainerProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export const GridRow: React.FC<GridRowProps> = ({ children, ...props }) => {
  return <Row {...props}>{children}</Row>;
};

export const GridCol: React.FC<GridColProps> = ({ children, ...props }) => {
  return <Col {...props}>{children}</Col>;
};
