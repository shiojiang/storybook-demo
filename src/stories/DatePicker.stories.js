import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from "vue";
Vue.use(ElementUI)
import DatePickers from "../components/datePicker.vue";

export default {
  title: 'Example/DatePickers',
  component: DatePickers,
  argTypes: {
    text: {
      description: "用于选择或输入日期",
      defaultValue: { summary: "选择日期范围" },
    },
    type: {
      description: "类型",
      defaultValue: { summary: "yyyy-MM-dd" },
    }
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DatePickers },
  template: '<DatePickers v-bind="$props"></DatePickers>',
});

export const Primary = Template.bind({});
Primary.args = {
//   primary: true,
//   label: 'Button',
};
export const Year = Template.bind({});
Year.args = {
  format: "yyyy",
};
export const allDate = Template.bind({});
Year.args = {
  format: "yyyy-MM-dd HH:mm:ss",
};
