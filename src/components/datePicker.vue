<template>
  <div class="datePicker">
    <el-date-picker v-model="date1" :clearable="false" :picker-options="options1" :placeholder="placeholder" @change="handlePick"></el-date-picker>
    <i class="icon-line"></i>
    <el-date-picker v-model="date2" :clearable="false" :picker-options="options2" :placeholder="placeholder" @change="handlePick"></el-date-picker>
  </div>
</template>

<script>
import { formatDate } from "../lib/date.js";
export default {
  props: {
    placeholder: { required: false, default: "选择时间" },
    value: { type: Array },
    format: { required: false, default: "yyyy-MM-dd" },
    default: { required: false, default: true }
  },
  name: "datePicker",
  data() {
    return {
      date1: null,
      date2: null,
      options1: {},
      options2: {}
    };
  },
  watch: {
    value: {
      handler() {
        this.date1 = this.value[0] || null;
        this.date2 = this.value[1] || null;
      },
      deep: true
    }
  },
  mounted() {
    let today = new Date();
    let lastWeek = new Date(new Date(new Date().setTime(new Date().getTime() - 3600 * 24 * 1000 * 7)).toDateString());
    if (this.default) {
      this.date1 = lastWeek;
      this.date2 = today;
      this.handlePick();
    } else {
      this.date1 = this.value[0] || null;
      this.date2 = this.value[1] || null;
      this.handlePick();
    }
    this.options1.disabledDate = time => {
      return this.getDisabled(time, 1);
    };
    this.options2.disabledDate = time => {
      return this.getDisabled(time, 2);
    };
  },
  methods: {
    getDisabled(val, type) {
      if (type == 1) {
        /* 第一个禁用 */
        if (!this.date2) {
          return false;
        } else if (new Date(this.date2) > new Date(val)) {
          return false;
        } else return true;
      } else if (type == 2) {
        /* 第二个的禁用 */
        if (!this.date1) {
          return false;
        } else if (new Date(this.date1) < new Date(val)) {
          return false;
        } else return true;
      }
    },
    handlePick() {
      if (this.format == "timestamp") {
        this.date1 = this.date1 ? new Date(this.date1).getTime() : null;
        this.date2 = this.date2 ? new Date(this.date2).getTime() : null;
      } else {
        this.date1 = this.date1 ? formatDate(new Date(this.date1), this.format) : null;
        this.date2 = this.date2 ? formatDate(new Date(this.date2), this.format) : null;
      }
      this.$emit("input", [this.date1, this.date2]);
      if (this.date1 && this.date2) {
        this.$emit("change", [this.date1, this.date2]);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.datePicker {
  display: flex;
  align-items: center;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 160px;
  border-radius: 2px;
}
/deep/ .el-date-editor.el-input {
  .el-input__inner {
    border-radius: 2px;
    height: 30px;
    line-height: 30px;
    padding-right: 50px;
  }
  .el-input__prefix {
    left: unset;
    right: 5px;
  }
  .el-input__suffix {
    right: 25px;
  }
  .el-input__icon {
    line-height: 30px;
  }
}
.icon-line {
  display: inline-block;
  width: 10px;
  height: 1px;
  background-color: #7f7f7f;
  margin-left: 5px;
  margin-right: 5px;
}
</style>