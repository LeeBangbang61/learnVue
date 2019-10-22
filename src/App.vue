<template>

	<div id="app">
		<a-layout style="height: 100%;">
			<a-layout-sider :trigger="null" collapsible v-model="collapsed">
				<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
					<a-menu-item key="1">
						<a-icon type="user" />
						<span>nav 1</span>
					</a-menu-item>
					<a-menu-item key="2">
						<a-icon type="video-camera" />
						<span>nav 2</span>
					</a-menu-item>
					<a-menu-item key="3">
						<a-icon type="upload" />
						<span>nav 3</span>
					</a-menu-item>
				</a-menu>
			</a-layout-sider>
			<a-layout>
				<a-layout-header style="background: #fff; padding: 0">
					<a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
				</a-layout-header>
				<a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' , 'overflow-y': 'auto'}">
					<projectListTable :table-data="projectData" :columns-data="projectColumnsData" />
				</a-layout-content>
			</a-layout>
		</a-layout>
	</div>
</template>

<script>
	import projectListTable from './components/projectListTable.vue';
	
	export default {
		name: 'app',
		components: {
			projectListTable
		},
		data: function() {
			return {
				collapsed: false,
				
				projectData: [],
				projectColumnsData: []
			}
		},
		created: function(){
			this.projectColumnsData = [{
					dataIndex: 'idNumber',
					title: '序号'
				}, {
					dataIndex: 'name',
					title: '项目名称'
				}, {
					dataIndex: 'property',
					title: '建设性质'
				}, {
					dataIndex: 'startDate',
					title: '开工时间'
				}, {
					dataIndex: 'type',
					title: '项目类型'
				}, {
					dataIndex: 'constructionInvestment',
					title: '建安费'
				}, {
					dataIndex: 'completeRate',
					title: '投资完成占比'
				}, {
					dataIndex: 'region',
					title: '所属区域'
				}, {
					dataIndex: 'action',
					title: '操作'
			}];
			
			const projectListRespone = {"data":[{"id":"bc428472-ec87-492e-9452-17ad41b70449","name":"三个重点","startDate":null,"type":"","contactUserName":"","contactUserPhone":"","totalInvestment":500.0,"constructionInvestment":1.0,"property":"","major":true,"region":"","actualInvestment":0.0,"planInvestment":0.0,"warningLevel":0,"preparationPrincipal":[],"constructionPrincipal":[],"shortName":"","majorType":"某个重点","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]},{"id":"b9521522-bd8e-4d2e-9deb-0852e5cc83f4","name":"111","startDate":null,"type":"排水工程","contactUserName":"","contactUserPhone":"","totalInvestment":100.0,"constructionInvestment":1.0,"property":"新建","major":false,"region":"","actualInvestment":0.0,"planInvestment":0.0,"warningLevel":0,"preparationPrincipal":["0bff6d56-7dbc-43e3-a874-09bdbae9a5cc"],"constructionPrincipal":["0bff6d56-7dbc-43e3-a874-09bdbae9a5cc"],"shortName":"","majorType":"","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]},{"id":"1f535095-9c76-48eb-a18c-89ea4c2d142c","name":"市政府办公楼新建","startDate":null,"type":"政府办公楼,办公楼新建","contactUserName":"c557b4c5-fd8c-41bd-abc6-a3a1062b9223","contactUserPhone":"13456498763","totalInvestment":1200.333,"constructionInvestment":1200.333,"property":"新建","major":true,"region":"","actualInvestment":149.0,"planInvestment":652.0,"warningLevel":0,"preparationPrincipal":["c557b4c5-fd8c-41bd-abc6-a3a1062b9223"],"constructionPrincipal":[],"shortName":"市政办公楼简称市政办公楼简称市政办公楼简称市政办公楼简称","majorType":"新办公楼,70周年大庆","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[{"id":"ba97abe3-140c-4a53-b900-cca17528a252","name":"地基填埋","startDate":"2019-08-01","type":"办公楼新建","contactUserName":"c557b4c5-fd8c-41bd-abc6-a3a1062b9223","contactUserPhone":"","totalInvestment":50.0,"constructionInvestment":0.0,"property":"新建","major":true,"region":"","actualInvestment":0.0,"planInvestment":0.0,"warningLevel":0,"preparationPrincipal":[],"constructionPrincipal":[],"shortName":"地基填埋","majorType":"","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]}]},{"id":"41d96d70-56f4-4a21-ad29-27c41516c729","name":"周边区域二级路接驳","startDate":null,"type":"道路修复,市政项目","contactUserName":"0bff6d56-7dbc-43e3-a874-09bdbae9a5cc","contactUserPhone":"","totalInvestment":5000.0,"constructionInvestment":0.0,"property":"","major":false,"region":"城区","actualInvestment":0.0,"planInvestment":0.0,"warningLevel":0,"preparationPrincipal":["d412646e-bf84-4e23-8bc2-f60f40d73b9c"],"constructionPrincipal":["f8b47511-1263-400b-be0c-ad06e7c84182"],"shortName":"二级路接驳","majorType":"","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]},{"id":"28dbdd0a-8241-4c81-905f-2aebb69248a7","name":"五个重点","startDate":null,"type":"","contactUserName":"","contactUserPhone":"","totalInvestment":5000.0,"constructionInvestment":1.0,"property":"","major":true,"region":"","actualInvestment":0.0,"planInvestment":0.0,"warningLevel":0,"preparationPrincipal":[],"constructionPrincipal":[],"shortName":"","majorType":"某个重点","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]},{"id":"c66370d9-20db-4ce4-a1f4-d31752b4faf3","name":"青秀山绿化工程","startDate":"2019-09-01","type":"城市道路接驳高速公路,市政项目,道路修复,办公楼翻修,商业建设项目,事业单位建筑,事业公共","contactUserName":"","contactUserPhone":"","totalInvestment":5.0,"constructionInvestment":72.0,"property":"","major":false,"region":"","actualInvestment":60.0,"planInvestment":72.0,"warningLevel":0,"preparationPrincipal":[],"constructionPrincipal":["f5631593-8489-4916-8611-e1d06ff5025a"],"shortName":"青秀山","majorType":"","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]},{"id":"e0af44da-2265-4783-994a-bfd0a4097afc","name":"四个重点","startDate":null,"type":"","contactUserName":"","contactUserPhone":"","totalInvestment":111.0,"constructionInvestment":1.0,"property":"","major":true,"region":"","actualInvestment":0.0,"planInvestment":0.0,"warningLevel":0,"preparationPrincipal":[],"constructionPrincipal":[],"shortName":"","majorType":"2019year","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]},{"id":"cacecf6c-e420-45b1-afed-85115a67958c","name":"二个重点","startDate":null,"type":"","contactUserName":"","contactUserPhone":"","totalInvestment":100.0,"constructionInvestment":1.0,"property":"","major":true,"region":"","actualInvestment":0.0,"planInvestment":0.0,"warningLevel":0,"preparationPrincipal":[],"constructionPrincipal":[],"shortName":"","majorType":"某一重点","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]},{"id":"c43fa196-5c5c-41ab-87ce-9a73645ac6ab","name":"一个重点","startDate":null,"type":"","contactUserName":"","contactUserPhone":"","totalInvestment":100.0,"constructionInvestment":1.0,"property":"","major":true,"region":"","actualInvestment":0.0,"planInvestment":0.0,"warningLevel":0,"preparationPrincipal":[],"constructionPrincipal":[],"shortName":"","majorType":"某一重点","authorId":"a6b5de30-7197-4e4c-bf49-803c032060d1","author":"admin","children":[]}],"timestamp":1571655112799,"status":200};
			let dataTemp = projectListRespone.data;
			
			dataTemp.forEach((value, index) => {
				value.isEdit = true;
				value.isDelete = true;
				value.isDisplay = true;
				
				value.pidNumber = 0;
				value.idNumber = index + 1;
				if(value.actualInvestment != 0 && value.constructionInvestment != 0){
					value.completeRate = value.actualInvestment/value.constructionInvestment;
				}else{
					value.completeRate = 0;
				}
				
				if(value.children.length > 0){
					for(var i in value.children){
						value.children[i].pidNumber = value.idNumber;
						value.children[i].pid = value.id;
						if(value.children[i].actualInvestment != 0 && value.children[i].constructionInvestment != 0){
							value.children[i].completeRate = value.children[i].actualInvestment/value.children[i].constructionInvestment;
						}else{
							value.children[i].completeRate = 0;
						}
						delete value.children[i].children;
					}
				}else{
					delete value.children;
				}
			});
			
			this.projectData = dataTemp;
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		height: 100%;
	}
</style>
