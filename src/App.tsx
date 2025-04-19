import "./App.css";
import { Logo } from "./core/components/logo/logo";
import { FormProvider } from "./core/contexts/FormContext";
import { MainLayout } from "./layout/main/main-layout";
import { Effects } from "./widgets/effects";
import { Form } from "./widgets/form";
import { Main } from "./widgets/main";

function App() {
  return (
    <>
      <FormProvider>
        <MainLayout>
          <Logo />
          <Main />
          <Form />
          <Effects/>
        </MainLayout>
      </FormProvider>
    </>
  );
}

export default App;
