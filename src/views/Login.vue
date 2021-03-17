<template>
  <div class="login flex justify-center items-center w-screen h-screen bg-gray-50">
    <div class="login-form w-1/4 shadow-lg rounded-lg p-4 bg-white">
      <a-form ref="formRef" :model="formModel" label-align="right" :rules="rules" v-bind="layout">
        <a-form-item label="User" name="userName">
          <a-input v-model:value="formModel.userName" placeholder="name" />
        </a-form-item>
        <a-form-item label="Password" name="password">
          <a-input v-model:value="formModel.password" placeholder="password" type="password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 10, span: 4 }">
          <a-button type="primary" @click="handleSubmit" html-type="submit" block>Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRaw, UnwrapRef } from "vue";
  import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
  import { login } from "../api/user";

  interface FormModel {
    userName: string;
    password: string;
  }

  export default defineComponent({
    setup() {
      const formModel: UnwrapRef<FormModel> = reactive({
        userName: "",
        password: ""
      });

      const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
      };

      const rules = {
        userName: [
          {
            required: true,
            message: "please input user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "please input user name",
            trigger: "blur"
          }
        ]
      };

      const formRef = ref();
      const handleSubmit = () => {
        formRef.value
          .validate()
          .then(() => {
            console.log("values", toRaw(formModel));
            login(toRaw(formModel)).then((res) => {
              localStorage.setItem("TOKEN", res.data.token);
            });
          })
          .catch((error: ValidateErrorEntity<FormModel>) => {
            console.log("error", error);
          });
      };
      return {
        formRef,
        formModel,
        layout,
        rules,
        handleSubmit
      };
    }
  });
</script>
