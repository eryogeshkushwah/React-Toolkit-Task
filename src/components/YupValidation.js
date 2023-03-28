import * as Yup from "yup";

export const YupValidation = Yup.object({
  add: Yup.string().required("* Task Should not be empty"),
});
