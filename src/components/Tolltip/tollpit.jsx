import "./tolltip.css";

const Tolltip = ({children, message= ""}) => {
  return (
    <div class="uiverse">
      <span class="tooltip">{message}</span>
      <span>{children}</span>
    </div>
  );
};

export default Tolltip;
