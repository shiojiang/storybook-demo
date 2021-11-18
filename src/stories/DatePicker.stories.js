import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from "vue";
Vue.use(ElementUI)
import DatePickers from "../components/datePicker.vue";

export default {
  title: 'Example/DatePickers',
  component: DatePickers,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DatePickers },
  template: '<DatePickers ></DatePickers>',
});

export const Primary = Template.bind({});
Primary.args = {
//   primary: true,
//   label: 'Button',
};
