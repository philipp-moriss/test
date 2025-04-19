import { useForm } from "../../core/contexts/FormContext";
import { HiddenIcon } from "../../core/icons/hidden-icon";
import { ShowIcon } from "../../core/icons/show-icon";
import styles from "./form.module.css";
import { Button } from "../../core/components/ui/button";
import { Checkbox } from "../../core/components/ui/checkbox";
import { InputField } from "../../core/components/ui/input-field";
import { Phone } from "../../core/components/ui/phone-input";
import { FormEffects } from "./form-effects";

export const Form = () => {
  const { state, dispatch } = useForm();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<typeof state.errors> = {};

    if (!state.phone) {
      errors.phone = "Введите номер телефона";
    } else if (!/^\+375\d{9}$/.test("+" + state.phone)) {
      errors.phone = "Введите корректный номер телефона";
    }

    if (!state.password) {
      errors.password = "Введите пароль";
    } else if (state.password.length < 6) {
      errors.password = "Пароль должен содержать минимум 6 символов";
    }

    if (!state.isAgeConfirmed) {
      errors.isAgeConfirmed = "Необходимо подтвердить возраст";
    }

    if (!state.isBonusConfirmed) {
      errors.isBonusConfirmed = "Необходимо согласиться";
    }

    dispatch({ type: "SET_ERRORS", payload: errors });

    if (Object.keys(errors).length === 0) {
      alert("Form submitted:" + JSON.stringify(state));
    }
  };

  return (
    <div className={styles.wrapper}>

      <FormEffects/>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Регистрация</h2>

        <Phone
          label="Номер телефона"
          value={state.phone}
          error={state.errors.phone}
          onChange={(value) => dispatch({ type: "SET_PHONE", payload: value })}
        />

        <InputField
          label="Пароль"
          type={state.isPasswordShown ? "text" : "password"}
          placeholder="Придумайте пароль"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          onIconPress={() =>
            dispatch({
              type: "SET_SHOW_PASSWORD",
              payload: !state.isPasswordShown,
            })
          }
          icon={state.isPasswordShown ? <ShowIcon /> : <HiddenIcon />}
          error={state.errors.password}
        />

        <div className={styles.checkboxes}>
          <Checkbox
            label="Мне больше 21 года. Я согласен и принимаю «Правила приема ставок» и «Политику конциденциальности»"
            error={state?.errors?.isAgeConfirmed}
            checked={state.isAgeConfirmed}
            onChange={(e) =>
              dispatch({ type: "SET_AGE_CONFIRMED", payload: e.target.checked })
            }
          />

          <Checkbox
            label="Я принимаю участие и согласен с условиями бонуса"
            error={state?.errors?.isBonusConfirmed}
            checked={state.isBonusConfirmed}
            onChange={(e) =>
              dispatch({
                type: "SET_BONUS_CONFIRMED",
                payload: e.target.checked,
              })
            }
          />
        </div>

        <Button type="submit">Регистрация</Button>
      </form>
    </div>
  );
};
