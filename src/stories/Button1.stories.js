import JButton from './Button1.vue'
import '../../src/assets/fonts/font.scss'
export default {
  title: '组件Demo/按钮',
  component: JButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'info', 'warning', 'danger', 'default'],
    },
    icon: {
      control: { type: 'select'},
      options: [ 'j-icon-edit', 'j-icon-check', 'j-icon-message', 'j-icon-star-off', 'j-icon-delete'],
    },
    size: {
      control: { type: 'select' },
      options: ['mini', 'small', 'medium', 'default'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JButton },
  template: '<j-button @onClick="onClick" v-bind="$props">按钮</j-button>',
});
const TemplateForIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JButton },
  template: '<j-button @onClick="onClick" v-bind="$props"></j-button>',
});

export const 类型 = Template.bind({});
类型.args = {
  type: 'primary',
};
export const 镂空 = Template.bind({});
镂空.args = {
  plain: true,
  type: 'primary',
};
export const 圆角 = Template.bind({});
圆角.args = {
  round: true,
  type: 'primary',
};
export const 图标 = TemplateForIcon.bind({});
图标.args = {
  icon: 'j-icon-edit',
  type: 'primary',
  circle: true,
};
