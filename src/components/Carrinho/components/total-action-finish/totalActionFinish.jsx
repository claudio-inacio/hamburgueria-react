
import "./totalActionFinish.css";
import Button from "../../../Button/button";

const TotalActionFinish = ({
  handleFinishBuySuccess = () => {},
  handleGetTotalValue = () => {},
}) => {
  return (
      <div className="resultado">
        <div className="total">
          <h3>Total</h3>
          <span>R$ {handleGetTotalValue().toFixed(2)}</span>
        </div>
        <Button
          loading={false}
          handleFunction={() => handleFinishBuySuccess()}
          title="Realizar Compra"
          typeButton="button"
          variant="success"
          idButton={`finish-buy`}
        />
      </div>
  );
};

export default TotalActionFinish;
