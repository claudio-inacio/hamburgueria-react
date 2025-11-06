

import "./headerTitle.css";

const HeaderTitle = ({
  title= 'Burguer',
  subTitle='Hero'
}) => {
  return (
     <div className="logo">
        <h2 className="titulo">{title}</h2>
        <p className="text-primary">{subTitle}</p>
      </div>
  );
};

export default HeaderTitle;
