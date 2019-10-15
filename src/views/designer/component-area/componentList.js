class BaseComponent {
  constructor({ component = '', label = '', props = {}, isContainer = false }) {
    this.component = component
    this.label = label
    this.props = props
    this.isContainer = isContainer
  }
}

class FormCompoent extends BaseComponent {
  constructor({ props = {}, ...others }) {
    super(others)
    // 对应的字段名
    this.isFormItem = true
    this.field = ''
    this.props = Object.assign(props, {
      placeholder: '请输入',
      size: 'mini',
      label: ''
    })
  }
}

class ContainerComponent extends BaseComponent {
  constructor({ isContainer = true, ...others }) {
    super({
      isContainer,
      ...others
    })
  }
}

export default [
  new FormCompoent({
    label: '输入框',
    component: 'el-input',
    props: {
      type: 'input'
    },
    isContainer: false
  }),
  new ContainerComponent({
    label: '网格-行',
    component: 'el-row',
    props: {
      gutter: 10,
      type: 'flex',
      justify: 'flex-start',
      align: 'flex-start'
    }
  }),
  new ContainerComponent({
    label: '网格-列',
    component: 'el-col',
    props: {
      span: 8
    }
  })
]
