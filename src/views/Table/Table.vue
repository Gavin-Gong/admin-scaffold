<template>
  <div class="table-page">
    <a-form layout="inline">
      <a-form-item label="title">
        <a-input v-model:value="modelRef.title" size="small"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button @click="onSubmit" type="primary" size="small">Submit</a-button>
        <a-button @click="onResetFields" size="small">Reset</a-button>
      </a-form-item>
    </a-form>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { useForm } from "@ant-design-vue/use"
import { useTable } from "./useTable"

export default defineComponent({
  setup () {
    const modelRef = reactive({
      title: "",
    })
    const { resetFields } = useForm(modelRef, reactive({}))
    const { columns, dataSource, getTableData } = useTable()
    const onSubmit = () => {
      getTableData(toRaw(modelRef))
    }
    return {
      modelRef,
      onSubmit,
      onResetFields: resetFields,
      dataSource,
      columns,
    }
  }
})
</script>

<style scoped>

</style>