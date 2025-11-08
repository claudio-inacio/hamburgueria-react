import "./fullScreenLoader.css";

const FullScreenLoader = ({ isLoading = false, message = "Carregando..." }) => {
  if (!isLoading) return null;

  return (
    <div className="modal-loader-overlay">
      <div className="modal-loader-content">
        <div className="spinner"></div>
        <p className="loader-text">{message}</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
