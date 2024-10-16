"use client";

import { Button, Radio } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { InferType, object, string } from "yup";

import { InputForm } from "../InputForm";
import { TextAreaForm } from "../TextAreaForm";

const formSchema = object().shape({
  name: string().required("Nome é obrigatório."),
  email: string().email("E-mail inválido.").required("E-mail é obrigatório."),
  habilities: string().required("Campo obrigatório."),
  stack: string().required("Você deve selecionar uma stack"),
  about: string().required("Campo obrigatório.")
});

type FormValues = InferType<typeof formSchema>;

export const RegisterForm = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(formSchema)
  });

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = methods;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-[460px] flex-col"
      >
        <InputForm name="name" label="Nome" error={errors.name} />
        <InputForm
          name="email"
          label="E-mail"
          type="email"
          error={errors.email}
        />

        <TextAreaForm
          label="Quais são suas habilidades?"
          name="habilities"
          error={errors.habilities}
        />

        <div className="flex flex-col">
          <p>
            Qual cargo você irá atuar?{" "}
            <span className="pl-0.5 font-semibold text-semanticColor-2">*</span>
          </p>

          <Controller
            name="stack"
            control={control}
            render={({ field }) => (
              <Radio.Group
                value={field.value}
                onValueChange={field.onChange}
                className="grid grid-cols-2 pb-4"
              >
                <Radio.Item name="Desenvolvedor Front End" value="front-end" />
                <Radio.Item name="Desenvolvedor Back End" value="back-end" />
                <Radio.Item
                  name="Desenvolvedor Full Stack"
                  value="full-stack"
                />
                <Radio.Item name="UI/UX Designer" value="ui-ux-designer" />
              </Radio.Group>
            )}
          />
          {errors.stack && (
            <span className="text-[#A1B2C3B2]">{errors.stack.message}</span>
          )}
        </div>

        <TextAreaForm
          label="Nos conte mais sobre você"
          name="about"
          error={errors.about}
        />

        <Button size="full" variant="primary" type="submit">
          Faça parte
        </Button>
      </form>
    </FormProvider>
  );
};
