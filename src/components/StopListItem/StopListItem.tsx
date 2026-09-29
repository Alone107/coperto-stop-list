export const StopListItem = ({ item }) => {
  return (
    <div className="stop-item">
      <div className="stop-item-img">
        <img src="" alt="" />
      </div>
      <div className="stop-item-info">
        <h3 className="stop-item-name">{item.name}</h3>
        <div className="stop-item-reason">{item.reason}</div>
        <div className="stop-item-comment">{item.comment}</div>
        <div className="stop-item-returnAt">Вернётся в меню: {item.time}</div>
      </div>
      <button type="button" className="btn btn-white">
        Вернуть в меню
      </button>
    </div>
  );
};
