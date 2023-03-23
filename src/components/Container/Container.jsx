import s from "./Container.module.css";

const Container = ({ children, title }) => {
  return (
    <div className={s.container}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Container;

// {/* <Container>
//   <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>
// </Container>; */}
