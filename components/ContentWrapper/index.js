import classes from "./contentWrapper.module.css";
export default function ContentWrapper({ children }) {
  return <main className={classes.content}>{children}</main>;
}
