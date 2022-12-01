import { defineComponent, h, Fragment } from 'vue'
import { Dropdown, Menu, MenuItem } from 'ant-design-vue'

const React = { createElement: h, Fragment }

export default defineComponent({
  name: 'CkbDropdown',
  components: { Dropdown, Menu, MenuItem },
  props: {},
  setup(props, context) {
    const list = ['1st menu item', '2nd menu item']
    return () => {
      return (
        <Dropdown>
          {{
            default: () => <a class="ant-dropdown-link">Hover me11</a>,
            overlay: () => (
              <Menu>
                <MenuItem>
                  <a>1st menu item</a>
                </MenuItem>
                <MenuItem>
                  <a>2nd menu item</a>
                </MenuItem>
              </Menu>
            )
          }}
        </Dropdown>
      )
    }
  }
})
