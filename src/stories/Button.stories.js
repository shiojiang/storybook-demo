import JButton from './Button.vue'
import '../../src/assets/fonts/font.scss'
export default {
  title: '组件Demo/按钮',
  component: JButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      description: '按钮类型：primary，success，info，warning，danger',
      options: ['primary', 'success', 'info', 'warning', 'danger', 'default'],
    },
    icon: {
      control: { type: 'select'},
      description: '字体图标：引用scss文件，具体参考src/assets/fonts',
      options: [ 'j-icon-edit', 'j-icon-check', 'j-icon-message', 'j-icon-star-off', 'j-icon-delete'],
    },
    size: {
      control: { type: 'select' },
      description: '按钮尺寸：mini，small，medium',
      options: ['mini', 'small', 'medium', 'default'],
    },
    label: { 
      description: '按钮文本'
    },
    plain: {
      description: '按钮是否镂空'
    },
    round: {
      description: '是否为圆角按钮'
    },
    circle: {
      description: '是否为圆形按钮(circle配合icon使用，在无label时生效)'
    },
    onClick: {
      description: '点击事件'
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JButton },
  template: '<j-button @onClick="onClick" v-bind="$props">{{label}}</j-button>',
});

export const Type = Template.bind({});
Type.args = {
  type: 'primary',
  label: '按钮'
};
export const Plain = Template.bind({});
Plain.args = {
  plain: true,
  type: 'primary',
  label: '按钮'
};
export const Round = Template.bind({});
Round.args = {
  round: true,
  type: 'primary',
  label: '按钮'
};
export const Icon = Template.bind({});
Icon.args = {
  icon: 'j-icon-edit',
  type: 'primary',
  circle: true,
};
