const QuickStart = () => import('@/views/examples/quick-start')
const TwoListGruop = () => import('@/views/examples/two-list-group')
const DraggableEvents = () => import('@/views/examples/draggable-events')

export default {
	path: '/examples',
	name: 'examples',
	component: {
		data() {
			return {
				menuList: [
					{name: '快速启动', route: 'quick-start'},
					{name: '两列互相拓展', route: 'two-list-group'},
					{name: '拖拽事件', route: 'draggable-events'},
					// {name: '快速启动', route: 'quick-start'},
				]
			}
		},
		render() {
			return (
				<div>
					<el-menu router
						mode="horizontal">
						{
							this.menuList.map((item)=>
							<el-menu-item index={item.route}>{item.name}</el-menu-item>	
							)
						}
					</el-menu>
					<router-view></router-view>
				</div>
			)
		}
	},
	redirect: '/examples/quick-start',
	children: [
		{
			path: 'quick-start',
			name: 'example-quick-start',
			component: QuickStart
		},{
			path: 'two-list-group',
			name: 'two-list-group',
			component: TwoListGruop
		},{
			path: 'draggable-events',
			name: 'draggable-events',
			component: DraggableEvents
		}
	]
}