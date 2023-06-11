import VibeComponent from "./VibeComponent";

export const withStaticProps = <T, P, S>(forwarded: VibeComponent<T, P>, staticProps: S) =>
  Object.assign(forwarded, staticProps);
