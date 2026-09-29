import React from "react";
import { addToStopList, selectItem } from "../../redux/stopListSlice";
import type { MenuItem } from "../../types/menu";

import { useDispatch } from "react-redux";
import type { StopListEntry } from "../../types/stopListEntry";

type StopListFormProps = {
  item: MenuItem;
};

export const StopListForm = ({ item }: StopListFormProps) => {
  const [errors, setErrors] = React.useState({
    reason: "",
    comment: "",
    returnAt: "",
  });

  const dispatch = useDispatch();

  const [reason, setReason] = React.useState<StopListEntry["reason"] | null>(
    null,
  );
  const [comment, setComment] = React.useState("");
  const [returnAt, setReturnAt] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      reason: "",
      comment: "",
      returnAt: "",
    };

    if (reason === null) {
      newErrors.reason = "Выберите причину";
    }

    if (returnAt === "") {
      newErrors.returnAt = "Выберите время";
    }

    if (reason === "other" && comment.trim().length < 10) {
      newErrors.comment = "Комментарий должен содержать минимум 10 символов";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(
      (error) => error.length > 0,
    );

    if (hasErrors) {
      return;
    }

    const newEntry: StopListEntry = {
      itemId: item.id,
      reason: reason,
      comment: comment,
      returnAt: returnAt,
      createdAt: new Date().toISOString(),
    };

    dispatch(addToStopList(newEntry));
    dispatch(selectItem(null));
  };

  return (
    <div className="list-form" onClick={() => dispatch(selectItem(null))}>
      <form
        action=""
        onClick={(event) => event.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <span className="form-title">Форма добавления в стоп-лист</span>
        <button
          type="button"
          onClick={() => dispatch(selectItem(null))}
          className="form-close"
        >
          x
        </button>
        <div className="card-form">
          <div className="card-form-img">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="card-form-info">
            <h3 className="card-form-info-name">{item.name}</h3>
            <div className="card-form-info-category">{item.category}</div>
            <div className="card-form-info-price">{item.price} ₽</div>
          </div>
          <div className="card-form-stock">
            <div className="card-form-stock-text">{item.remainder} порций</div>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="reason">Причина</label>
          <select
            name=""
            value={reason ?? ""}
            onChange={(event) =>
              setReason(event.target.value as StopListEntry["reason"])
            }
            id="reason"
          >
            <option value="" disabled>
              Выберите причину
            </option>
            <option value="out_of_stock">Закончились продукты</option>
            <option value="bad_quality">Плохое качество партии</option>
            <option value="no_cook">Нет повара на станции</option>
            <option value="other">Другое</option>
          </select>
          {errors.reason && <div className="error-text">{errors.reason}</div>}
        </div>

        <div className="form-row">
          <label htmlFor="comment">Комментарий</label>
          <textarea
            name=""
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            id="comment"
            maxLength={200}
          ></textarea>
          {errors.comment && <div className="error-text">{errors.comment}</div>}
        </div>

        <div className="form-row">
          <label htmlFor="returnAt">Время предполагаемого возврата</label>
          <input
            type="time"
            value={returnAt}
            onChange={(event) => setReturnAt(event.target.value)}
            id="returnAt"
          />
          {errors.returnAt && (
            <div className="error-text">{errors.returnAt}</div>
          )}
        </div>

        <div className="buttons">
          <button
            type="button"
            onClick={() => dispatch(selectItem(null))}
            className="btn-reset btn"
          >
            Отмена
          </button>
          <button type="submit" className="btn btn-orange">
            Добавить в стоп-лист
          </button>
        </div>
      </form>
    </div>
  );
};
